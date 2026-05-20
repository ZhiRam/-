import { dietPlans, dietMethods } from './dietData';

interface DietMethod {
  id: string;
  name: string;
  icon: string;
  desc: string;
}

interface MealPlan {
  id: number;
  name: string;
  description: string;
  method: string;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  meals: {
    name: string;
    time: string;
    foods: string[];
  }[];
}

Page({
  data: {
    currentTab: 'methods' as 'methods' | 'plans',
    dietMethods: dietMethods as DietMethod[],
    dietPlans: dietPlans as MealPlan[],
    selectedPlan: null as MealPlan | null,
    selectedMethod: '' as string,
    macrosList: [] as { name: string; value: number; unit: string; percent: number }[],
    isShowDetail: false
  },

  onLoad() {
    this.calculateMacros({ protein: 0, carbs: 0, fat: 0 });
  },

  // 返回上一页
  goBack() {
    wx.navigateBack();
  },

  // 切换Tab
  switchTab(e: WechatMiniprogram.TargetDataset) {
    const tab = e.currentTarget.dataset.tab as 'methods' | 'plans';
    this.setData({ currentTab: tab, isShowDetail: false, selectedPlan: null });
  },

  // 选择饮食方法
  selectMethod(e: WechatMiniprogram.TargetDataset) {
    const method = e.currentTarget.dataset.method as string;
    this.setData({ selectedMethod: method === this.data.selectedMethod ? '' : method });
  },

  // 选择饮食方案
  selectPlan(e: WechatMiniprogram.TargetDataset) {
    const planId = e.currentTarget.dataset.id as number;
    const plan = dietPlans.find(p => p.id === planId);
    if (plan) {
      const totalMacro = plan.macros.protein * 4 + plan.macros.carbs * 4 + plan.macros.fat * 9;
      const macrosList = [
        { name: '蛋白质', value: plan.macros.protein, unit: 'g', percent: Math.round((plan.macros.protein * 4 / totalMacro) * 100) },
        { name: '碳水', value: plan.macros.carbs, unit: 'g', percent: Math.round((plan.macros.carbs * 4 / totalMacro) * 100) },
        { name: '脂肪', value: plan.macros.fat, unit: 'g', percent: Math.round((plan.macros.fat * 9 / totalMacro) * 100) }
      ];
      this.setData({ selectedPlan: plan, macrosList, isShowDetail: true });
    }
  },

  // 计算默认宏量营养素
  calculateMacros(macros: { protein: number; carbs: number; fat: number }) {
    const totalMacro = macros.protein * 4 + macros.carbs * 4 + macros.fat * 9;
    if (totalMacro === 0) return;
    this.setData({
      macrosList: [
        { name: '蛋白质', value: macros.protein, unit: 'g', percent: Math.round((macros.protein * 4 / totalMacro) * 100) },
        { name: '碳水', value: macros.carbs, unit: 'g', percent: Math.round((macros.carbs * 4 / totalMacro) * 100) },
        { name: '脂肪', value: macros.fat, unit: 'g', percent: Math.round((macros.fat * 9 / totalMacro) * 100) }
      ]
    });
  },

  // 关闭详情
  closeDetail() {
    this.setData({ isShowDetail: false, selectedPlan: null });
  },

  // 获取图标
  getIcon(icon: string): string {
    const icons: Record<string, string> = {
      cycle: '🔄',
      fire: '🔥',
      protein: '💪',
      time: '⏰',
      leaf: '🥬'
    };
    return icons[icon] || '🍽️';
  }
});
