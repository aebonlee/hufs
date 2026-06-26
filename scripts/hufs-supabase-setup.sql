-- =====================================================================
--  HUFS Vibe Coding — Supabase 테이블 설정 스크립트
--  공유 Supabase 프로젝트(hcmgdztsgjvzcyxyayaj)에서 실행.
--  사이트 전용 테이블은 모두 `hufs_` 접두사 사용 (다른 사이트와 격리).
--  공유 테이블(user_profiles 등)은 이미 존재하므로 생성하지 않음.
--  Supabase Dashboard → SQL Editor 에 붙여넣고 실행.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1) hufs_settings — 사이트 설정(예: AI 실습용 API Key) 저장
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.hufs_settings (
  key        TEXT PRIMARY KEY,
  value      TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.hufs_settings ENABLE ROW LEVEL SECURITY;

-- 누구나 읽기 (클라이언트에서 설정값 사용)
DROP POLICY IF EXISTS "hufs_settings_public_select" ON public.hufs_settings;
CREATE POLICY "hufs_settings_public_select"
  ON public.hufs_settings FOR SELECT
  USING (true);

-- 관리자(admin/superadmin)만 쓰기
DROP POLICY IF EXISTS "hufs_settings_admin_write" ON public.hufs_settings;
CREATE POLICY "hufs_settings_admin_write"
  ON public.hufs_settings FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles
      WHERE id = auth.uid() AND role IN ('admin', 'superadmin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.user_profiles
      WHERE id = auth.uid() AND role IN ('admin', 'superadmin')
    )
  );


-- ---------------------------------------------------------------------
-- 2) hufs_prompt_scores — 프롬프트 실습 자동 채점 점수/이력
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.hufs_prompt_scores (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name   TEXT NOT NULL DEFAULT '',
  quiz_score  INTEGER NOT NULL DEFAULT 0,
  eval_score  INTEGER NOT NULL DEFAULT 0,
  write_score INTEGER NOT NULL DEFAULT 0,
  total_score INTEGER NOT NULL DEFAULT 0,
  grade       TEXT NOT NULL DEFAULT '',
  detail      JSONB,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS hufs_prompt_scores_user_idx
  ON public.hufs_prompt_scores (user_id, created_at DESC);

ALTER TABLE public.hufs_prompt_scores ENABLE ROW LEVEL SECURITY;

-- 본인 점수만 조회
DROP POLICY IF EXISTS "hufs_prompt_scores_select_own" ON public.hufs_prompt_scores;
CREATE POLICY "hufs_prompt_scores_select_own"
  ON public.hufs_prompt_scores FOR SELECT
  USING (auth.uid() = user_id);

-- 본인 점수만 저장
DROP POLICY IF EXISTS "hufs_prompt_scores_insert_own" ON public.hufs_prompt_scores;
CREATE POLICY "hufs_prompt_scores_insert_own"
  ON public.hufs_prompt_scores FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 관리자는 전체 조회(수강생 점수 확인)
DROP POLICY IF EXISTS "hufs_prompt_scores_admin_select" ON public.hufs_prompt_scores;
CREATE POLICY "hufs_prompt_scores_admin_select"
  ON public.hufs_prompt_scores FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles
      WHERE id = auth.uid() AND role IN ('admin', 'superadmin')
    )
  );


-- ---------------------------------------------------------------------
-- 3) (선택) hufs_orders / hufs_order_items
--     현재 features.shop = false 이므로 사용하지 않음.
--     추후 결제/스토어 기능을 켤 경우에만 아래 주석을 해제해 실행.
-- ---------------------------------------------------------------------
-- CREATE TABLE IF NOT EXISTS public.hufs_orders (
--   id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   order_number   TEXT UNIQUE NOT NULL,
--   user_id        UUID DEFAULT auth.uid(),
--   user_email     TEXT NOT NULL,
--   user_name      TEXT NOT NULL,
--   user_phone     TEXT,
--   total_amount   INTEGER NOT NULL DEFAULT 0,
--   payment_method TEXT,
--   payment_status TEXT NOT NULL DEFAULT 'pending',
--   created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
--   paid_at        TIMESTAMPTZ
-- );
-- CREATE TABLE IF NOT EXISTS public.hufs_order_items (
--   id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   order_id      UUID REFERENCES public.hufs_orders(id) ON DELETE CASCADE,
--   product_title TEXT NOT NULL,
--   quantity      INTEGER NOT NULL DEFAULT 1,
--   unit_price    INTEGER NOT NULL DEFAULT 0,
--   subtotal      INTEGER NOT NULL DEFAULT 0
-- );

-- =====================================================================
--  참고: 인증(구글/카카오)
--  - Auth Provider(Google, Kakao)는 공유 프로젝트에 이미 활성화되어 있음.
--  - Redirect 허용 목록이 `https://*.dreamitbiz.com/**` 와일드카드면
--    hufs.dreamitbiz.com 은 추가 설정 없이 동작.
--  - 신규 가입은 클라이언트(AuthContext)에서 user_profiles 에 직접 insert
--    (auth.users 트리거 미사용 → 가입 마비 사고 방지).
-- =====================================================================
