// ===== 部署配置 Deployment config =====
// MODE: 'demo'  -> 本地演示（数据存于浏览器 localStorage，含示例客户）
//       'supabase' -> 正式模式（Supabase 登录 + Postgres + 行级权限 RLS）
window.CRM_CONFIG = {
  MODE: 'demo',
  COMPANY_NAME_EN: 'Your Company Co., Ltd.',   // TODO: 公司英文名
  COMPANY_NAME_CN: '贵公司外贸部',               // TODO: 公司中文名
  COMPANY_WEBSITE: '',                           // TODO: 官网，用于开发信签名 {{my_website}}
  LOGO_URL: '',                                  // TODO: e.g. 'assets/logo.png'
  SUPABASE_URL: '',                              // e.g. 'https://xxxx.supabase.co'
  SUPABASE_ANON_KEY: '',                         // public anon key (safe in frontend; RLS protects data)
  USERNAME_EMAIL_DOMAIN: 'crm.example.com'       // 用户名 -> 登录邮箱 映射: sales1 -> sales1@crm.example.com
};
