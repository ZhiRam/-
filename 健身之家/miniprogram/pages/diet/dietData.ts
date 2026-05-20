// 饮食方案数据
export interface MealPlan {
  id: number;
  name: string;
  description: string;
  method: string; // 饮食方法
  calories: number; // 每日热量
  macros: {
    protein: number; // 蛋白质 g
    carbs: number; // 碳水 g
    fat: number; // 脂肪 g
  };
  meals: {
    name: string;
    time: string;
    foods: string[];
  }[];
}

export const dietPlans: MealPlan[] = [
  {
    id: 1,
    name: '碳循环饮食法',
    description: '通过高低碳水循环来优化脂肪燃烧和肌肉增长，适合有运动习惯的人群',
    method: 'carbonCycle',
    calories: 2000,
    macros: { protein: 150, carbs: 200, fat: 67 },
    meals: [
      {
        name: '早餐',
        time: '07:00',
        foods: ['3个全蛋', '100g燕麦', '1根香蕉', '30g坚果']
      },
      {
        name: '午餐',
        time: '12:00',
        foods: ['200g鸡胸肉', '300g糙米', '150g西兰花', '橄榄油']
      },
      {
        name: '训练前加餐',
        time: '16:00',
        foods: ['1个苹果', '30g花生酱']
      },
      {
        name: '晚餐',
        time: '19:00',
        foods: ['200g牛肉', '300g红薯', '蔬菜沙拉']
      }
    ]
  },
  {
    id: 2,
    name: '生酮饮食法',
    description: '低碳水高脂肪的饮食方式，促使身体进入酮症状态燃烧脂肪',
    method: 'keto',
    calories: 1800,
    macros: { protein: 120, carbs: 30, fat: 145 },
    meals: [
      {
        name: '早餐',
        time: '07:00',
        foods: ['培根3片', '2个全蛋', '菠菜炒蛋', '防弹咖啡1杯']
      },
      {
        name: '午餐',
        time: '12:00',
        foods: ['200g三文鱼', '牛油果1个', '混合绿叶蔬菜', '橄榄油']
      },
      {
        name: '下午茶',
        time: '15:00',
        foods: ['30g芝士', '10颗杏仁']
      },
      {
        name: '晚餐',
        time: '19:00',
        foods: ['200g牛排', '西兰花', '黄油蔬菜', '坚果一把']
      }
    ]
  },
  {
    id: 3,
    name: '高蛋白增肌饮食',
    description: '以高蛋白为核心的增肌饮食方案，适合力量训练者',
    method: 'highProtein',
    calories: 2500,
    macros: { protein: 200, carbs: 250, fat: 83 },
    meals: [
      {
        name: '早餐',
        time: '07:00',
        foods: ['5个蛋清', '100g鸡胸肉', '100g燕麦', '全脂牛奶']
      },
      {
        name: '午餐',
        time: '12:00',
        foods: ['250g牛肉', '400g米饭', '蔬菜任意']
      },
      {
        name: '训练后餐',
        time: '17:00',
        foods: ['乳清蛋白粉', '100g面包', '水果']
      },
      {
        name: '晚餐',
        time: '20:00',
        foods: ['200g鱼或鸡胸', '400g土豆', '蔬菜沙拉']
      }
    ]
  },
  {
    id: 4,
    name: '间歇性断食(16:8)',
    description: '每天16小时禁食，8小时进食窗口，简化饮食计划',
    method: 'intermittent',
    calories: 2000,
    macros: { protein: 150, carbs: 180, fat: 75 },
    meals: [
      {
        name: '第一餐 (12:00)',
        time: '12:00',
        foods: ['3个全蛋', '150g鸡胸肉', '牛油果', '蔬菜']
      },
      {
        name: '第二餐 (15:00)',
        time: '15:00',
        foods: ['200g牛肉', '米饭或土豆', '蔬菜']
      },
      {
        name: '第三餐 (19:00)',
        time: '19:00',
        foods: ['三文鱼或虾', '红薯', '绿叶蔬菜', '坚果']
      }
    ]
  },
  {
    id: 5,
    name: '低脂饮食法',
    description: '控制脂肪摄入，以碳水化合物为主要能量来源',
    method: 'lowFat',
    calories: 2000,
    macros: { protein: 140, carbs: 280, fat: 45 },
    meals: [
      {
        name: '早餐',
        time: '07:00',
        foods: ['燕麦粥', '水果', '脱脂牛奶']
      },
      {
        name: '午餐',
        time: '12:00',
        foods: ['鸡胸肉沙拉', '糙米', '水果']
      },
      {
        name: '加餐',
        time: '15:00',
        foods: ['蛋白粉', '香蕉', '全麦面包']
      },
      {
        name: '晚餐',
        time: '19:00',
        foods: ['鱼或虾', '糙米', '大量蔬菜']
      }
    ]
  }
];

export const dietMethods = [
  { id: 'carbonCycle', name: '碳循环饮食', icon: 'cycle', desc: '高低碳水循环，优化燃脂增肌' },
  { id: 'keto', name: '生酮饮食', icon: 'fire', desc: '低碳高脂，进入酮症状态' },
  { id: 'highProtein', name: '高蛋白饮食', icon: 'protein', desc: '高蛋白增肌，适合力量训练' },
  { id: 'intermittent', name: '间歇性断食', icon: 'time', desc: '16:8断食，简化饮食' },
  { id: 'lowFat', name: '低脂饮食', icon: 'leaf', desc: '控制脂肪，健康减脂' }
];
