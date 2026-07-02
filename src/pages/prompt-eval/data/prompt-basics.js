export default {
  id: 'prompt-basics',
  icon: 'fa-lightbulb',
  title: '프롬프트 기초',
  titleEn: 'Prompt Fundamentals',
  sections: [
    {
      title: '프롬프트란 무엇인가',
      titleEn: 'What is a Prompt',
      content: `Claude에게 원하는 결과를 얻기 위해 전달하는 입력 텍스트를 **프롬프트(Prompt)**라고 합니다.

### 프롬프트의 정의

프롬프트는 단순한 질문이 아니라, Claude와의 **소통 인터페이스**입니다. 좋은 프롬프트는 명확한 지시, 충분한 맥락, 원하는 출력 형식을 포함합니다. 대학 행정 업무에서는 공문 작성, 민원 응대, 학사 안내, 명단 정리 등 반복적이고 정형화된 일을 Claude로 빠르게 처리할 수 있습니다.

### 프롬프트의 4대 구성요소

| 구성요소 | 설명 | 예시 |
|---------|------|------|
| **역할(Role)** | Claude에게 부여할 전문가 역할 | "당신은 한국외대 학사팀 행정 담당자입니다" |
| **맥락(Context)** | 배경 정보 및 상황 설명 | "수강신청 정정 기간 연장을 학생에게 안내하는 상황에서..." |
| **지시(Instruction)** | 수행할 구체적 작업 | "학생 대상 공지문 초안을 작성해주세요" |
| **출력형식(Format)** | 원하는 응답 형태 | "제목·본문·문의처가 구분된 공지문 형식으로" |

### Claude 활용 환경별 프롬프트 유형

| 유형 | 사용 환경 | 특징 |
|------|----------|------|
| 대화형 프롬프트 | Claude.ai (웹/앱) | 자연어 대화로 문서 작성·요약·번역 요청 |
| 데스크톱 작업 | Claude Desktop | 내 PC의 파일·자료를 연결해 업무 처리 |
| 문서·데이터 처리 | Claude.ai 파일 업로드 | 엑셀 명단, PDF 공문 첨부 후 분석 지시 |
| 자동화·코딩 | Claude Code | 안내 웹페이지 제작, 명단 데이터 변환 스크립트 |

> 좋은 프롬프트의 핵심은 **구체성**, **명확성**, **맥락 제공** 세 가지입니다.`,
      contentEn: `The input text you provide to Claude to get desired results is called a **Prompt**.

### Definition of a Prompt

A prompt is not just a simple question — it's a **communication interface** with Claude. Good prompts include clear instructions, sufficient context, and desired output format. In university administration, Claude can quickly handle repetitive, structured work such as drafting official notices, responding to inquiries, student-affairs guidance, and cleaning up name lists.

### Four Core Components of a Prompt

| Component | Description | Example |
|-----------|-------------|---------|
| **Role** | Expert role assigned to Claude | "You are an administrator in the HUFS Academic Affairs team" |
| **Context** | Background information and situation | "When notifying students that the course-add/drop period is extended..." |
| **Instruction** | Specific task to perform | "Draft a notice for students" |
| **Format** | Desired response format | "As a notice with a title, body, and contact line" |

### Prompt Types Across Claude Environments

| Type | Environment | Characteristics |
|------|-------------|-----------------|
| Conversational prompts | Claude.ai (web/app) | Request writing, summarizing, translation in natural language |
| Desktop tasks | Claude Desktop | Connect local files and materials to handle work |
| Document/data processing | Claude.ai file upload | Attach Excel lists or PDF documents, then instruct analysis |
| Automation/coding | Claude Code | Build guidance web pages, convert name-list data |

> The keys to good prompts are **specificity**, **clarity**, and **context**.`,
    },
    {
      title: '프롬프트 작성 원칙',
      titleEn: 'Prompt Writing Principles',
      content: `효과적인 프롬프트를 작성하기 위한 핵심 원칙을 알아봅니다.

### CLEAR 프레임워크

| 원칙 | 설명 | 실천 방법 |
|------|------|----------|
| **C**oncise (간결) | 불필요한 표현 제거 | 핵심 키워드 중심으로 작성 |
| **L**ogical (논리적) | 단계적·구조적 지시 | 번호 매기기, 순서 지정 |
| **E**xplicit (명시적) | 모호함 배제 | 구체적 수치, 대상, 범위 지정 |
| **A**daptive (적응적) | 결과 기반 반복 개선 | 출력 확인 후 프롬프트 조정 |
| **R**ole-based (역할 기반) | 전문가 역할 부여 | "학사팀 담당자의 관점에서" 지정 |

### 좋은 프롬프트 vs 나쁜 프롬프트

| 구분 | 나쁜 예시 | 좋은 예시 |
|------|----------|----------|
| 공문 작성 | "공문 써줘" | "교무처 명의로 학과 사무실에 보내는 '기말고사 성적입력 마감 안내' 공문을 작성해줘. 마감일·입력 경로·문의처를 포함하고 정중한 행정 공문체로" |
| 문서 요약 | "이거 요약해줘" | "이 학칙 개정안을 학생 대상 안내용으로 3개 핵심 변경사항과 1개 유의사항으로 요약해줘" |
| 데이터 정리 | "명단 정리해줘" | "이 교환학생 신청 명단에서 학과·지원국가별 인원을 집계하고, 어학성적 미제출자를 표로 따로 추려줘" |
| 민원 답변 | "답장 써줘" | "졸업요건 학점 부족으로 졸업이 보류된 학생에게 안내 메일을 작성해줘. 사유 설명 + 부족 학점 + 구제 절차를 포함하고, 공감하면서도 정확한 톤으로" |

### 프롬프트 개선 체크리스트

| 체크 항목 | 설명 |
|----------|------|
| 목적이 명확한가? | 무엇을 얻고 싶은지 분명히 명시 |
| 맥락이 충분한가? | 부서, 대상(학생/교직원/외부), 용도 포함 |
| 제약 조건이 있는가? | 글자 수, 형식, 공문체/안내문체 지정 |
| 출력 형식을 지정했는가? | 표, 목록, 공문, 메일 등 원하는 형태 |
| 예시를 제공했는가? | 원하는 결과의 샘플이나 기존 양식 포함 |

> 프롬프트 작성은 "한 번에 완벽하게"가 아니라 "반복적으로 개선"하는 과정입니다.`,
      contentEn: `Learn the core principles for writing effective prompts.

### CLEAR Framework

| Principle | Description | Practice |
|-----------|-------------|----------|
| **C**oncise | Remove unnecessary expressions | Focus on key terms |
| **L**ogical | Step-by-step, structured instructions | Use numbering, specify order |
| **E**xplicit | Eliminate ambiguity | Specify exact numbers, audience, ranges |
| **A**daptive | Iterative improvement based on results | Adjust prompt after checking output |
| **R**ole-based | Assign expert roles | Specify "from an Academic Affairs staff perspective" |

### Good Prompts vs Bad Prompts

| Category | Bad Example | Good Example |
|----------|------------|--------------|
| Official notice | "Write a notice" | "Draft an official notice from the Office of Academic Affairs to department offices titled 'Final grade-entry deadline.' Include deadline, entry path, and contact, in a formal administrative tone" |
| Summary | "Summarize this" | "Summarize this academic-regulation amendment for students, with 3 key changes and 1 caution item" |
| Data cleanup | "Clean up this list" | "From this exchange-student applicant list, tally counts by department and destination country, and separately list applicants missing language scores in a table" |
| Inquiry reply | "Write a reply" | "Write a guidance email to a student whose graduation is on hold due to insufficient credits. Include reason + missing credits + remedy procedure, in an empathetic yet accurate tone" |

### Prompt Improvement Checklist

| Check Item | Description |
|-----------|-------------|
| Is the purpose clear? | Clearly state what you want to achieve |
| Is context sufficient? | Include department, audience (student/staff/external), use case |
| Are there constraints? | Specify length, format, official vs. informational tone |
| Is output format specified? | Table, list, official notice, email, etc. |
| Are examples provided? | Include samples or an existing template |

> Prompt writing is not about "getting it perfect the first time" but about "iterative improvement."`,
    },
  ],
};
