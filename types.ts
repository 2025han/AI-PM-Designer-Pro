
export interface ProductAnalysis {
  name: string;
  visual_description: string;
  key_features_zh: string;
}

export interface PromptData {
  prompt_en: string;
  summary_zh: string;
}

export interface MarketingRoute {
  route_name: string;
  headline_zh: string;
  subhead_zh: string;
  style_brief_zh: string;
  target_audience_zh?: string; // 目標客群描述（新增，可選以保持向後相容）
  visual_elements_zh?: string; // 具體視覺元素（新增，可選以保持向後相容）
  image_prompts: PromptData[];
}

export interface DirectorOutput {
  product_analysis: ProductAnalysis;
  marketing_routes: MarketingRoute[];
}

// --- PRO Version Types ---

export interface ContentItem {
  id: string;
  type: 'main_white' | 'main_lifestyle' | 'story_slide';
  ratio: '1:1' | '9:16' | '16:9';
  title_zh: string;
  copy_zh: string; // 文案內容
  visual_prompt_en: string;
  visual_summary_zh: string;
}

export interface ContentPlan {
  plan_name: string;
  items: ContentItem[];
}

export enum AppState {
  IDLE,
  ANALYZING,
  RESULTS, // Phase 1 Done (Routes visible)
  PLANNING, // Phase 2 Analyzing (Generating Script)
  SUITE_READY, // Phase 2 Script Ready (Review Mode)
  ERROR
}
