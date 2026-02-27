/* ══════════════════════════════════════════════
   MAXZUN — script.js
   IT Company Website — Multilingual + Interactions
   ══════════════════════════════════════════════ */

/* ─── TRANSLATIONS ──────────────────────────── */
const translations = {
  es: {
    nav_inicio:"Inicio", nav_servicios:"Servicios", nav_proceso:"Proceso de Trabajo",
    nav_contacto:"Contacto", nav_cta:"Cotizar Ahora",
    hero_badge:"Soluciones Digitales para el Mundo",
    hero_h1_1:"Tu Presencia", hero_h1_2:"Digital", hero_h1_3:", Redefinida", hero_h1_4:"por MAXZUN",
    hero_desc:"Diseñamos páginas web, creamos logos, restauramos fotografías antiguas, producimos videos y brindamos soporte técnico. Todo bajo un mismo techo, con soporte multilingüe para clientes de todo el mundo.",
    pill_web:"Páginas Web", pill_logo:"Diseño de Logos", pill_foto:"Restauración de Fotos",
    pill_laptop:"Formato de Laptops", pill_data:"Recuperación de Datos", pill_video:"Producción de Video",
    hero_cta1:"Solicitar Cotización", hero_cta2:"Ver Servicios →",
    stat1:"Proyectos entregados", stat2:"Idiomas de soporte", stat3:"Semanas de entrega",
    logos_label:"Sectores que confiaron en nosotros",
    svc_label:"Nuestros Servicios",
    svc_title:"Todo lo que tu negocio necesita en digital",
    svc_desc:"Ofrecemos un ecosistema completo de servicios tecnológicos y creativos.",
    svc1_title:"Diseño de Páginas Web", svc1_desc:"Creamos sitios web modernos, rápidos y responsivos. Con SEO integrado, multilingüe y diseño personalizado para tu negocio.",
    svc2_title:"Creación de Logos", svc2_desc:"Identidad visual única y profesional. Logos vectoriales, manual de marca y adaptaciones para todos los formatos.",
    svc3_title:"Restauración de Fotos Antiguas", svc3_desc:"Fotos en blanco y negro convertidas a color, restauración de daños y mejora de calidad.",
    svc4_title:"Formateo de Laptops", svc4_desc:"Recupera el rendimiento de tu equipo. Instalación de sistema operativo y configuración optimizada.",
    svc5_title:"Recuperación de Datos", svc5_desc:"Rescatamos archivos de discos dañados, formateos accidentales y particiones perdidas.",
    svc6_title:"Producción de Video", svc6_desc:"Videos corporativos, reels, motion graphics y edición para redes sociales y plataformas digitales.",
    proj_title:"Proyectos Destacados",
    proj_tag_marketplace:"Marketplace", proj_tag_crypto:"Cripto Educación", proj_tag_uni:"Portal Universitario",
    proj1_desc:"Plataforma de compra y venta de artículos de segunda mano. Sistema de búsqueda avanzada y perfiles verificados para una experiencia segura.",
    proj2_desc:"Portal educativo sobre criptomonedas y blockchain. Cursos y herramientas interactivas para aprender sobre el mundo cripto desde cero.",
    proj3_desc:"Plataforma de recursos académicos para estudiantes universitarios. Materiales de estudio, trámites en línea y comunidad estudiantil.",
    proj_know_more:"Saber más →",
    proc_label:"Proceso de Trabajo", proc_title:"Tu web lista en 2 semanas",
    proc_desc:"Un proceso claro, transparente y eficiente. Desde la primera reunión hasta el lanzamiento.",
    step1_phase:"Semana 0 — Inicio", step1_title:"Solicitud y Cotización",
    step1_desc:"Nos contactas por WhatsApp, formulario o correo. Analizamos tu proyecto y enviamos cotización sin compromisos.",
    step1_dur:"1–2 días",
    step2_phase:"Semana 1 — Diseño", step2_title:"Concepto de Diseño",
    step2_desc:"Creamos la estructura visual: colores, tipografía, layout y prototipo interactivo para que veas exactamente cómo lucirá.",
    step2_dur:"3–4 días",
    step3_phase:"Semana 1–2 — Desarrollo", step3_title:"Traducción Multilingüe",
    step3_desc:"Integramos soporte en múltiples idiomas. Ideal para el Mundial 2026 y clientes internacionales.",
    step3_dur:"2–3 días",
    step4_phase:"Semana 2 — Revisión", step4_title:"Aprobación Final del Cliente",
    step4_desc:"Te mostramos el sitio en un enlace privado de prueba. Realizamos ajustes hasta que estés 100% satisfecho.",
    step4_dur:"1–2 días",
    step5_phase:"Semana 2 — Lanzamiento", step5_title:"Publicación en Internet",
    step5_desc:"Activamos tu dominio, hosting y publicamos al mundo. Incluye SSL, optimización y soporte post-lanzamiento.",
    step5_dur:"1 día",
    note1_title:"Mundial 2026 — Oportunidad Única",
    note1_text:"Con el Mundial en Norteamérica, millones de visitantes extranjeros llegarán a México. El momento perfecto para tener tu negocio en línea con soporte multilingüe.",
    note2_title:"Soporte en 4+ Idiomas",
    note2_text:"Diseñamos sitios con español, inglés, coreano y chino. Atendemos clientes de todo el mundo.",
    s1_num:"14", s1_lbl:"Días de entrega promedio",
    s2_num:"4+", s2_lbl:"Idiomas disponibles",
    s3_num:"100%", s3_lbl:"Sitios responsivos",
    s4_num:"3", s4_lbl:"Proyectos activos",
    contact_label:"Contacto", contact_title:"Hablemos de tu proyecto",
    contact_desc:"Respuesta garantizada en menos de 24 horas. Atendemos en español, inglés, coreano y chino.",
    ci_email:"Correo", ci_location:"Ubicación", ci_loc_val:"Ciudad de México, México",
    ci_langs:"Idiomas de atención",
    form_title:"Solicitar Cotización Gratis",
    form_name:"Nombre", form_email:"Correo electrónico", form_service:"Servicio de interés",
    form_sel_default:"Seleccionar servicio...", form_opt1:"Diseño de Página Web",
    form_opt2:"Creación de Logo", form_opt3:"Restauración de Fotos",
    form_opt4:"Formateo de Laptop", form_opt5:"Recuperación de Datos",
    form_opt6:"Producción de Video", form_opt7:"Otro",
    form_msg:"Cuéntanos tu proyecto", form_btn:"Enviar Mensaje →",
    footer_tagline:"Soluciones digitales integrales para empresas y emprendedores.",
    foot_col1:"Servicios", foot_col2:"Proyectos", foot_col3:"Empresa",
    foot_l1:"Páginas Web", foot_l2:"Logos", foot_l3:"Restauración de Fotos",
    foot_l4:"Soporte Técnico", foot_l5:"Video",
    foot_m1:"Inicio", foot_m2:"Proceso", foot_m3:"Contacto", foot_m4:"Cotización",
    foot_rights:"Todos los derechos reservados."
  },

  en: {
    nav_inicio:"Home", nav_servicios:"Services", nav_proceso:"Our Process",
    nav_contacto:"Contact", nav_cta:"Get a Quote",
    hero_badge:"Digital Solutions for the World",
    hero_h1_1:"Your Digital", hero_h1_2:"Presence", hero_h1_3:", Redefined", hero_h1_4:"by MAXZUN",
    hero_desc:"We design websites, create logos, restore old photographs, produce videos and provide technical support. All under one roof, with multilingual support for clients worldwide.",
    pill_web:"Websites", pill_logo:"Logo Design", pill_foto:"Photo Restoration",
    pill_laptop:"Laptop Formatting", pill_data:"Data Recovery", pill_video:"Video Production",
    hero_cta1:"Request a Quote", hero_cta2:"View Services →",
    stat1:"Projects delivered", stat2:"Support languages", stat3:"Weeks to deliver",
    logos_label:"Sectors that trusted us",
    svc_label:"Our Services",
    svc_title:"Everything your business needs digitally",
    svc_desc:"We offer a complete ecosystem of tech and creative services.",
    svc1_title:"Website Design", svc1_desc:"Modern, fast and responsive websites. With integrated SEO, multilingual support and custom design for your business.",
    svc2_title:"Logo Creation", svc2_desc:"Unique and professional visual identity. Vector logos, brand manual and adaptations for all formats.",
    svc3_title:"Old Photo Restoration", svc3_desc:"Black and white photos converted to color, damage restoration and quality enhancement.",
    svc4_title:"Laptop Formatting", svc4_desc:"Restore your computer's performance. OS installation and optimized configuration.",
    svc5_title:"Data Recovery", svc5_desc:"We rescue files from damaged drives, accidental formats and lost partitions.",
    svc6_title:"Video Production", svc6_desc:"Corporate videos, reels, motion graphics and editing for social media and digital platforms.",
    proj_title:"Featured Projects",
    proj_tag_marketplace:"Marketplace", proj_tag_crypto:"Crypto Education", proj_tag_uni:"University Portal",
    proj1_desc:"Buying and selling platform for second-hand items. Advanced search system and verified profiles for a safe experience.",
    proj2_desc:"Educational portal about cryptocurrencies and blockchain. Courses and interactive tools to learn about the crypto world.",
    proj3_desc:"Academic resource platform for university students. Study materials, online procedures and student community.",
    proj_know_more:"Learn more →",
    proc_label:"Work Process", proc_title:"Your website ready in 2 weeks",
    proc_desc:"A clear, transparent and efficient process. From first meeting to launch.",
    step1_phase:"Week 0 — Start", step1_title:"Request & Quote",
    step1_desc:"Contact us via WhatsApp, form or email. We analyze your project and send a no-obligation quote.",
    step1_dur:"1–2 days",
    step2_phase:"Week 1 — Design", step2_title:"Design Concept",
    step2_desc:"We create the visual structure: colors, typography, layout and interactive prototype.",
    step2_dur:"3–4 days",
    step3_phase:"Week 1–2 — Development", step3_title:"Multilingual Translation",
    step3_desc:"We integrate support in multiple languages. Ideal for the 2026 World Cup and international clients.",
    step3_dur:"2–3 days",
    step4_phase:"Week 2 — Review", step4_title:"Final Client Approval",
    step4_desc:"We show you the site on a private test link. We make adjustments until you're 100% satisfied.",
    step4_dur:"1–2 days",
    step5_phase:"Week 2 — Launch", step5_title:"Go Live",
    step5_desc:"We activate your domain, hosting and publish to the world. Includes SSL, optimization and post-launch support.",
    step5_dur:"1 day",
    note1_title:"World Cup 2026 — Unique Opportunity",
    note1_text:"With the World Cup in North America, millions of foreign visitors will come to Mexico. The perfect time to have your business online with multilingual support.",
    note2_title:"Support in 4+ Languages",
    note2_text:"We build sites in Spanish, English, Korean and Chinese. We serve clients from all over the world.",
    s1_num:"14", s1_lbl:"Average delivery days",
    s2_num:"4+", s2_lbl:"Available languages",
    s3_num:"100%", s3_lbl:"Responsive sites",
    s4_num:"3", s4_lbl:"Active projects",
    contact_label:"Contact", contact_title:"Let's talk about your project",
    contact_desc:"Guaranteed response within 24 hours. We serve you in Spanish, English, Korean and Chinese.",
    ci_email:"Email", ci_location:"Location", ci_loc_val:"Mexico City, Mexico",
    ci_langs:"Support languages",
    form_title:"Request a Free Quote",
    form_name:"Name", form_email:"Email address", form_service:"Service of interest",
    form_sel_default:"Select service...", form_opt1:"Website Design",
    form_opt2:"Logo Creation", form_opt3:"Photo Restoration",
    form_opt4:"Laptop Formatting", form_opt5:"Data Recovery",
    form_opt6:"Video Production", form_opt7:"Other",
    form_msg:"Tell us about your project", form_btn:"Send Message →",
    footer_tagline:"Comprehensive digital solutions for businesses and entrepreneurs.",
    foot_col1:"Services", foot_col2:"Projects", foot_col3:"Company",
    foot_l1:"Websites", foot_l2:"Logos", foot_l3:"Photo Restoration",
    foot_l4:"Technical Support", foot_l5:"Video",
    foot_m1:"Home", foot_m2:"Process", foot_m3:"Contact", foot_m4:"Quote",
    foot_rights:"All rights reserved."
  },

  ko: {
    nav_inicio:"홈", nav_servicios:"서비스", nav_proceso:"제작 과정",
    nav_contacto:"연락처", nav_cta:"견적 받기",
    hero_badge:"세계를 위한 디지털 솔루션",
    hero_h1_1:"당신의 디지털", hero_h1_2:"존재감", hero_h1_3:", 재정의됩니다", hero_h1_4:"MAXZUN으로",
    hero_desc:"웹사이트 제작, 로고 디자인, 흑백 사진 컬러 복원, 영상 제작, 기술 지원까지. 세계 각지의 고객을 위한 다국어 서비스를 제공합니다.",
    pill_web:"웹사이트 제작", pill_logo:"로고 디자인", pill_foto:"사진 복원",
    pill_laptop:"노트북 포맷", pill_data:"데이터 복원", pill_video:"영상 제작",
    hero_cta1:"견적 요청하기", hero_cta2:"서비스 보기 →",
    stat1:"완료된 프로젝트", stat2:"지원 언어", stat3:"제작 기간(주)",
    logos_label:"신뢰하는 분야",
    svc_label:"서비스 소개",
    svc_title:"비즈니스에 필요한 모든 디지털 솔루션",
    svc_desc:"기술 및 창의적 서비스의 완전한 생태계를 제공합니다.",
    svc1_title:"웹사이트 제작", svc1_desc:"현대적이고 빠른 반응형 웹사이트. SEO 최적화, 다국어 지원 및 맞춤 디자인.",
    svc2_title:"로고 제작", svc2_desc:"독창적이고 전문적인 시각적 정체성. 벡터 로고, 브랜드 가이드 포함.",
    svc3_title:"흑백 사진 컬러 복원", svc3_desc:"오래된 흑백 사진을 컬러로 복원합니다. 손상된 사진도 복구 가능.",
    svc4_title:"노트북 포맷", svc4_desc:"컴퓨터 성능 회복. 운영체제 설치 및 최적화 설정.",
    svc5_title:"데이터 복원", svc5_desc:"손상된 드라이브, 실수로 포맷된 파일 복구.",
    svc6_title:"영상 제작", svc6_desc:"기업 영상, 릴스, 모션 그래픽 및 SNS용 편집.",
    proj_title:"주요 프로젝트",
    proj_tag_marketplace:"중고 마켓", proj_tag_crypto:"암호화폐 교육", proj_tag_uni:"대학 포털",
    proj1_desc:"중고 물품 거래 플랫폼 Giganteca. 고급 검색 및 검증된 판매자 프로필.",
    proj2_desc:"암호화폐 및 블록체인 교육 포털 Bitconomia. 처음부터 배우는 코스 제공.",
    proj3_desc:"대학생을 위한 학습 자료 플랫폼 MiUNAM. 온라인 서류 및 학생 커뮤니티.",
    proj_know_more:"자세히 보기 →",
    proc_label:"제작 과정", proc_title:"2주 안에 완성되는 웹사이트",
    proc_desc:"명확하고 투명한 프로세스. 첫 미팅부터 런칭까지.",
    step1_phase:"0주차 — 시작", step1_title:"견적 의뢰",
    step1_desc:"WhatsApp, 폼 또는 이메일로 문의. 프로젝트 분석 후 무료 견적 발송.",
    step1_dur:"1–2일",
    step2_phase:"1주차 — 디자인", step2_title:"디자인 컨셉",
    step2_desc:"색상, 폰트, 레이아웃 및 인터랙티브 프로토타입 제작.",
    step2_dur:"3–4일",
    step3_phase:"1–2주차 — 개발", step3_title:"다국어 번역",
    step3_desc:"여러 언어 지원 통합. 2026 월드컵과 외국인 고객을 위한 최적화.",
    step3_dur:"2–3일",
    step4_phase:"2주차 — 검토", step4_title:"의뢰자 최종 확인",
    step4_desc:"비공개 테스트 링크에서 완성본 확인. 100% 만족할 때까지 수정.",
    step4_dur:"1–2일",
    step5_phase:"2주차 — 런칭", step5_title:"인터넷 서비스 제공",
    step5_desc:"도메인, 호스팅 활성화 및 전 세계 공개. SSL, 속도 최적화 포함.",
    step5_dur:"1일",
    note1_title:"2026 월드컵 — 특별한 기회",
    note1_text:"2026 북중미 월드컵으로 수백만 명의 외국인이 멕시코를 방문합니다. 다국어 웹사이트로 글로벌 고객을 잡으세요.",
    note2_title:"4개 이상 언어 지원",
    note2_text:"스페인어, 영어, 한국어, 중국어로 제작. 전 세계 고객을 위한 서비스.",
    s1_num:"14", s1_lbl:"평균 제작 기간(일)",
    s2_num:"4+", s2_lbl:"지원 언어 수",
    s3_num:"100%", s3_lbl:"반응형 사이트",
    s4_num:"3", s4_lbl:"진행 중 프로젝트",
    contact_label:"연락처", contact_title:"프로젝트에 대해 이야기해요",
    contact_desc:"24시간 이내 답변 보장. 스페인어, 영어, 한국어, 중국어로 응대.",
    ci_email:"이메일", ci_location:"위치", ci_loc_val:"멕시코시티, 멕시코",
    ci_langs:"지원 언어",
    form_title:"무료 견적 신청",
    form_name:"이름", form_email:"이메일 주소", form_service:"관심 서비스",
    form_sel_default:"서비스 선택...", form_opt1:"웹사이트 제작",
    form_opt2:"로고 제작", form_opt3:"사진 복원",
    form_opt4:"노트북 포맷", form_opt5:"데이터 복원",
    form_opt6:"영상 제작", form_opt7:"기타",
    form_msg:"프로젝트 설명", form_btn:"메시지 보내기 →",
    footer_tagline:"기업과 창업자를 위한 종합 디지털 솔루션.",
    foot_col1:"서비스", foot_col2:"프로젝트", foot_col3:"회사",
    foot_l1:"웹사이트", foot_l2:"로고", foot_l3:"사진 복원",
    foot_l4:"기술 지원", foot_l5:"영상",
    foot_m1:"홈", foot_m2:"제작 과정", foot_m3:"연락처", foot_m4:"견적",
    foot_rights:"모든 권리 보유."
  },

  zh: {
    nav_inicio:"首页", nav_servicios:"服务", nav_proceso:"制作流程",
    nav_contacto:"联系我们", nav_cta:"立即报价",
    hero_badge:"为世界提供数字解决方案",
    hero_h1_1:"您的数字", hero_h1_2:"存在感", hero_h1_3:"，重新定义", hero_h1_4:"by MAXZUN",
    hero_desc:"我们设计网站、创建标志、修复旧照片、制作视频并提供技术支持。一站式服务，为全球客户提供多语言支持。",
    pill_web:"网站建设", pill_logo:"标志设计", pill_foto:"照片修复",
    pill_laptop:"笔记本格式化", pill_data:"数据恢复", pill_video:"视频制作",
    hero_cta1:"申请报价", hero_cta2:"查看服务 →",
    stat1:"已完成项目", stat2:"支持语言", stat3:"交付周数",
    logos_label:"信任我们的行业",
    svc_label:"我们的服务",
    svc_title:"您的业务所需一切数字服务",
    svc_desc:"提供完整的技术和创意服务生态系统。",
    svc1_title:"网站设计", svc1_desc:"现代、快速且响应式的网站。集成SEO、多语言支持和定制设计。",
    svc2_title:"标志创建", svc2_desc:"独特专业的视觉形象。矢量标志、品牌手册和各种格式适配。",
    svc3_title:"旧照片修复", svc3_desc:"黑白照片转彩色，修复损坏并提升质量。",
    svc4_title:"笔记本格式化", svc4_desc:"恢复电脑性能。安装操作系统和优化配置。",
    svc5_title:"数据恢复", svc5_desc:"从损坏硬盘、意外格式化和丢失分区中恢复文件。",
    svc6_title:"视频制作", svc6_desc:"企业视频、短片、动态图形及社交媒体编辑。",
    proj_title:"重点项目",
    proj_tag_marketplace:"二手市场", proj_tag_crypto:"加密货币教育", proj_tag_uni:"大学门户",
    proj1_desc:"二手物品买卖平台Giganteca。高级搜索系统和经过验证的卖家档案。",
    proj2_desc:"加密货币和区块链教育门户Bitconomia。从零开始学习的课程和互动工具。",
    proj3_desc:"大学生学习资源平台MiUNAM。学习材料、在线事务和学生社区。",
    proj_know_more:"了解更多 →",
    proc_label:"工作流程", proc_title:"2周内完成您的网站",
    proc_desc:"清晰、透明、高效的流程。从首次会议到上线发布。",
    step1_phase:"第0周 — 开始", step1_title:"询价与报价",
    step1_desc:"通过WhatsApp、表单或邮件联系我们。分析项目并发送免费报价。",
    step1_dur:"1–2天",
    step2_phase:"第1周 — 设计", step2_title:"设计概念",
    step2_desc:"创建视觉结构：色彩、字体、布局和交互原型。",
    step2_dur:"3–4天",
    step3_phase:"第1–2周 — 开发", step3_title:"多语言翻译",
    step3_desc:"集成多语言支持。非常适合2026世界杯和国际客户。",
    step3_dur:"2–3天",
    step4_phase:"第2周 — 审核", step4_title:"客户最终确认",
    step4_desc:"在私密测试链接上展示网站。调整直到您100%满意。",
    step4_dur:"1–2天",
    step5_phase:"第2周 — 上线", step5_title:"发布上线",
    step5_desc:"激活域名、托管并向全世界发布。包含SSL、速度优化和售后支持。",
    step5_dur:"1天",
    note1_title:"2026世界杯 — 千载难逢的机会",
    note1_text:"2026北中美世界杯将吸引数百万外国游客来到墨西哥。现在正是建立多语言网站的最佳时机。",
    note2_title:"支持4种以上语言",
    note2_text:"我们以西班牙语、英语、韩语和中文构建网站。服务来自世界各地的客户。",
    s1_num:"14", s1_lbl:"平均交付天数",
    s2_num:"4+", s2_lbl:"支持语言",
    s3_num:"100%", s3_lbl:"响应式网站",
    s4_num:"3", s4_lbl:"进行中项目",
    contact_label:"联系我们", contact_title:"让我们谈谈您的项目",
    contact_desc:"24小时内保证回复。提供西班牙语、英语、韩语和中文服务。",
    ci_email:"邮箱", ci_location:"地址", ci_loc_val:"墨西哥城，墨西哥",
    ci_langs:"支持语言",
    form_title:"申请免费报价",
    form_name:"姓名", form_email:"电子邮箱", form_service:"感兴趣的服务",
    form_sel_default:"选择服务...", form_opt1:"网站设计",
    form_opt2:"标志创建", form_opt3:"照片修复",
    form_opt4:"笔记本格式化", form_opt5:"数据恢复",
    form_opt6:"视频制作", form_opt7:"其他",
    form_msg:"描述您的项目", form_btn:"发送消息 →",
    footer_tagline:"为企业和创业者提供全面的数字解决方案。",
    foot_col1:"服务", foot_col2:"项目", foot_col3:"公司",
    foot_l1:"网站", foot_l2:"标志", foot_l3:"照片修复",
    foot_l4:"技术支持", foot_l5:"视频",
    foot_m1:"首页", foot_m2:"流程", foot_m3:"联系", foot_m4:"报价",
    foot_rights:"版权所有。"
  }
};

/* ─── LANGUAGE SWITCHER ─────────────────────── */
let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // Update all [data-i18n] text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update [data-i18n-placeholder] attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update <select> options
  const svcSelect = document.querySelector('select');
  if (svcSelect) {
    const opts = svcSelect.querySelectorAll('option');
    const keys = ['form_sel_default','form_opt1','form_opt2','form_opt3',
                  'form_opt4','form_opt5','form_opt6','form_opt7'];
    opts.forEach((opt, i) => {
      if (keys[i] && t[keys[i]]) opt.textContent = t[keys[i]];
    });
  }

  // Sync active state on all lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnText = btn.textContent.trim();
    const isActive =
      (lang === 'es' && btnText === 'ES') ||
      (lang === 'en' && btnText === 'EN') ||
      (lang === 'ko' && btnText === '한국') ||
      (lang === 'zh' && btnText === '中文');
    btn.classList.toggle('active', isActive);
  });
}

/* ─── NAV SCROLL EFFECT ─────────────────────── */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
});

/* ─── MOBILE MENU ───────────────────────────── */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburger');
  if (!menu || !btn) return;
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}

function closeMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburger');
  if (!menu || !btn) return;
  menu.classList.remove('open');
  btn.classList.remove('open');
}

/* ─── SCROLL REVEAL ─────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Observe all .reveal elements once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
