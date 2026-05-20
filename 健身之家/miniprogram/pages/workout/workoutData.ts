// 健身动作数据

export interface Exercise {
  id: number;
  name: string;
  equipment: string;
  difficulty: '初级' | '中级' | '高级';
  description: string;
  steps: string[];
  tips: string;
}

export interface MuscleGroup {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  exercises: Exercise[];
}

export const muscleGroups: MuscleGroup[] = [
  // 胸部
  {
    id: 'chest',
    name: '胸部',
    icon: '💪',
    color: '#FF6B6B',
    description: '胸大肌、胸小肌',
    exercises: [
      {
        id: 1,
        name: '杠铃卧推',
        equipment: '杠铃',
        difficulty: '中级',
        description: '经典的胸部训练动作，主要锻炼胸大肌',
        steps: [
          '平躺在卧推凳上，双脚踩实地面',
          '双手握杠铃，握距略宽于肩',
          '将杠铃从架子上拿起，置于胸部上方',
          '吸气，控制速度将杠铃下放至胸部',
          '呼气，用胸肌力量将杠铃推起'
        ],
        tips: '保持肩胛骨收紧，避免肩膀过度前伸'
      },
      {
        id: 2,
        name: '上斜哑铃卧推',
        equipment: '哑铃',
        difficulty: '中级',
        description: '针对上胸部的训练动作',
        steps: [
          '将凳子调至30-45度倾斜',
          '双手握哑铃置于肩膀两侧',
          '将哑铃推起至手臂伸直',
          '缓慢下放至胸部上方'
        ],
        tips: '角度不宜过大，否则肩膀参与过多'
      },
      {
        id: 3,
        name: '下斜哑铃卧推',
        equipment: '哑铃',
        difficulty: '中级',
        description: '针对下胸部的训练动作',
        steps: [
          '将凳子调至下斜角度约15-30度',
          '双手握哑铃置于肩膀两侧',
          '将哑铃推起至手臂伸直',
          '缓慢下放至胸部下方'
        ],
        tips: '控制下斜角度，避免头晕'
      },
      {
        id: 4,
        name: '哑铃飞鸟',
        equipment: '哑铃',
        difficulty: '初级',
        description: '孤立刺激胸肌的经典动作',
        steps: [
          '平躺在平凳上，双手握哑铃向上举起',
          '手臂微屈，以弧线轨迹向两侧打开',
          '下放至胸部有拉伸感的位置',
          '收紧胸肌，将哑铃合拢至胸部上方'
        ],
        tips: '控制重量，避免手臂完全伸直'
      },
      {
        id: 5,
        name: '绳索飞鸟',
        equipment: '绳索',
        difficulty: '初级',
        description: '全程张力刺激胸肌',
        steps: [
          '站在龙门架中间，双脚与肩同宽',
          '双手握住两侧绳索把手',
          '身体微微前倾，手臂微屈',
          '胸肌发力，将手臂向胸前合拢',
          '在顶峰挤压胸肌'
        ],
        tips: '保持手臂角度固定，避免借力'
      },
      {
        id: 6,
        name: '标准俯卧撑',
        equipment: '自重',
        difficulty: '初级',
        description: '经典的自重胸部训练动作',
        steps: [
          '双手撑地，与肩同宽或略宽',
          '身体保持一条直线',
          '屈肘下降至胸部接近地面',
          '推起身体至手臂伸直'
        ],
        tips: '核心收紧，避免塌腰'
      },
      {
        id: 7,
        name: '宽距俯卧撑',
        equipment: '自重',
        difficulty: '初级',
        description: '重点刺激胸大肌',
        steps: [
          '双手撑地，比肩宽1.5倍',
          '身体保持一条直线',
          '屈肘下降至胸部接近地面',
          '推起身体至手臂伸直'
        ],
        tips: '宽距主要练胸，窄距主要练三头'
      },
      {
        id: 8,
        name: '上斜俯卧撑',
        equipment: '自重',
        difficulty: '初级',
        description: '适合初学者的下胸训练',
        steps: [
          '双手撑在椅子或台阶上',
          '身体保持一条直线',
          '屈肘下降至胸部接近支撑物',
          '推起身体至手臂伸直'
        ],
        tips: '支撑物越高，难度越低'
      }
    ]
  },

  // 肩部
  {
    id: 'shoulder',
    name: '肩部',
    icon: '🎯',
    color: '#4ECDC4',
    description: '三角肌前束、中束、后束',
    exercises: [
      {
        id: 9,
        name: '哑铃肩推',
        equipment: '哑铃',
        difficulty: '中级',
        description: '主要锻炼三角肌前束和中束',
        steps: [
          '坐在有靠背的凳子上',
          '双手握哑铃置于肩膀两侧',
          '将哑铃垂直向上推起',
          '在顶部顶峰收缩1秒',
          '缓慢下放至起始位置'
        ],
        tips: '核心收紧，避免腰部过度反弓'
      },
      {
        id: 10,
        name: '阿诺德推举',
        equipment: '哑铃',
        difficulty: '高级',
        description: '全面锻炼三角肌的综合动作',
        steps: [
          '双手握哑铃，掌心朝向自己',
          '开始时哑铃位于肩部两侧',
          '三角肌发力，向上推举',
          '同时旋转手腕至掌心朝前',
          '在顶部顶峰收缩，然后反向回到起始位置'
        ],
        tips: '动作全程控制，避免借力'
      },
      {
        id: 11,
        name: '坐姿杠铃推举',
        equipment: '杠铃',
        difficulty: '中级',
        description: '大重量肩部复合动作',
        steps: [
          '坐在推举凳上，握杠铃',
          '杠铃置于锁骨上方',
          '三角肌发力，将杠铃推起',
          '在顶部顶峰收缩',
          '缓慢下放至起始位置'
        ],
        tips: '控制重量，避免腰部反弓受伤'
      },
      {
        id: 12,
        name: '哑铃侧平举',
        equipment: '哑铃',
        difficulty: '初级',
        description: '孤立锻炼三角肌中束',
        steps: [
          '双手握哑铃置于身体两侧',
          '保持微屈肘，手臂自然下垂',
          '三角肌发力，将手臂向两侧抬起',
          '抬至与肩同高或略高',
          '缓慢下放，控制速度'
        ],
        tips: '避免使用惯性甩动，重量不宜过大'
      },
      {
        id: 13,
        name: '绳索侧平举',
        equipment: '绳索',
        difficulty: '初级',
        description: '全程张力的中束训练',
        steps: [
          '站在龙门架侧面',
          '手握低位滑轮绳索',
          '三角肌中束发力侧举',
          '抬至与肩同高',
          '缓慢控制下放'
        ],
        tips: '单侧训练效果更集中'
      },
      {
        id: 14,
        name: '面拉',
        equipment: '绳索',
        difficulty: '初级',
        description: '锻炼三角肌后束和肩袖肌群',
        steps: [
          '将绳索调至与面部同高',
          '双手握住绳索两端',
          '三角肌后束发力，将绳索拉向面部',
          '保持手肘高于肩膀',
          '缓慢放回，控制速度'
        ],
        tips: '对改善圆肩很有帮助'
      },
      {
        id: 15,
        name: '俯身侧平举',
        equipment: '哑铃',
        difficulty: '中级',
        description: '专门针对后束的训练',
        steps: [
          '双手握哑铃，身体前倾约45度',
          '手臂自然下垂，掌心相对',
          '三角肌后束发力，将手臂向两侧抬起',
          '抬至与肩同高',
          '缓慢下放'
        ],
        tips: '避免腰部过度弓背'
      },
      {
        id: 16,
        name: '蝴蝶机反向飞鸟',
        equipment: '器械',
        difficulty: '初级',
        description: '固定轨迹的后束训练',
        steps: [
          '调整器械手柄至与肩同高',
          '面向器械坐好，双手握住把手',
          '三角肌后束发力，向后夹',
          '在顶峰挤压后束',
          '缓慢放回'
        ],
        tips: '顶峰收缩1-2秒效果更好'
      }
    ]
  },

  // 背部
  {
    id: 'back',
    name: '背部',
    icon: '🔙',
    color: '#45B7D1',
    description: '背阔肌、斜方肌、竖脊肌',
    exercises: [
      {
        id: 17,
        name: '杠铃划船',
        equipment: '杠铃',
        difficulty: '中级',
        description: '全面锻炼背部厚度',
        steps: [
          '双脚与肩同宽站立',
          '屈髋俯身至背部接近与地面平行',
          '双手握杠铃，握距与肩同宽',
          '将杠铃拉向小腹位置',
          '顶峰收缩后缓慢下放'
        ],
        tips: '全程保持背部挺直，避免弯腰'
      },
      {
        id: 18,
        name: '哑铃划船',
        equipment: '哑铃',
        difficulty: '初级',
        description: '单侧背部训练经典动作',
        steps: [
          '一手撑在凳子上，另一手握哑铃',
          '身体保持平行于地面',
          '背阔肌发力，将哑铃拉向臀部',
          '顶峰时挤压背部',
          '缓慢下放'
        ],
        tips: '可有效纠正左右力量不平衡'
      },
      {
        id: 19,
        name: '坐姿划船',
        equipment: '器械/绳索',
        difficulty: '初级',
        description: '孤立锻炼背部肌群',
        steps: [
          '坐在器械上，双脚踩实踏板',
          '双手握住把手',
          '背部挺直，肩带下沉',
          '将把手拉向腹部',
          '缓慢放回，保持张力'
        ],
        tips: '顶峰时挤压肩胛骨'
      },
      {
        id: 20,
        name: '引体向上',
        equipment: '单杠',
        difficulty: '中级',
        description: '锻炼背阔肌和核心的经典动作',
        steps: [
          '双手正握单杠，与肩同宽或略宽',
          '身体悬挂，手臂伸直',
          '背阔肌发力，将身体拉起',
          '下巴过杠或至胸部接近单杠',
          '缓慢下放，保持控制'
        ],
        tips: '避免身体过度摇晃，可借助弹力带'
      },
      {
        id: 21,
        name: '高位下拉',
        equipment: '器械',
        difficulty: '初级',
        description: '模仿引体向上的器械动作',
        steps: [
          '坐在器械上，调整大腿挡板',
          '双手握宽距横杆',
          '肩带下沉，背阔肌发力',
          '将横杆拉至锁骨位置',
          '缓慢放回，手臂不完全伸直'
        ],
        tips: '身体可略微后倾增加背阔肌参与'
      },
      {
        id: 22,
        name: '直臂下拉',
        equipment: '绳索',
        difficulty: '初级',
        description: '热身背阔肌的孤立动作',
        steps: [
          '双脚与肩同宽站立',
          '双手握横杆，手臂伸直',
          '背阔肌发力，将杆下拉至大腿前',
          '保持手臂微屈',
          '缓慢放回'
        ],
        tips: '此动作不屈肘，重点感受背阔肌'
      },
      {
        id: 23,
        name: '传统硬拉',
        equipment: '杠铃',
        difficulty: '高级',
        description: '综合性训练动作，锻炼全身后链',
        steps: [
          '双脚与肩同宽站立，杠铃贴近小腿',
          '屈髋屈膝，双手握杠铃',
          '背部挺直，通过腿部和臀部发力站起',
          '身体完全直立后，臀部前挺',
          '保持背部挺直，缓慢下放'
        ],
        tips: '新手建议在教练指导下学习'
      },
      {
        id: 24,
        name: '罗马尼亚硬拉',
        equipment: '杠铃/哑铃',
        difficulty: '中级',
        description: '专门锻炼腘绳肌和臀部',
        steps: [
          '双脚与肩同宽站立',
          '双手握杠铃置于大腿前侧',
          '屈髋向后，杠铃沿腿部下放',
          '至腘绳肌有拉伸感',
          '通过腘绳肌和臀部发力站起'
        ],
        tips: '保持膝关节微屈，不要过度弯腰'
      }
    ]
  },

  // 腿部
  {
    id: 'leg',
    name: '腿部',
    icon: '🦵',
    color: '#DDA0DD',
    description: '股四头肌、腘绳肌、臀大肌、小腿',
    exercises: [
      {
        id: 25,
        name: '杠铃深蹲',
        equipment: '杠铃',
        difficulty: '中级',
        description: '腿部训练的经典复合动作',
        steps: [
          '双脚与肩同宽或略宽站立',
          '将杠铃置于斜方肌上',
          '屈髋屈膝，下蹲至大腿与地面平行',
          '膝盖与脚尖方向一致',
          '通过腿部和臀部发力站起'
        ],
        tips: '保持背部挺直，核心收紧'
      },
      {
        id: 26,
        name: '哑铃深蹲',
        equipment: '哑铃',
        difficulty: '初级',
        description: '初学者友好的深蹲动作',
        steps: [
          '双脚与肩同宽站立，双手握哑铃',
          '屈髋屈膝，下蹲至大腿与地面平行',
          '膝盖与脚尖方向一致',
          '通过腿部发力站起'
        ],
        tips: '保持背部挺直，目视前方'
      },
      {
        id: 27,
        name: '弓步蹲',
        equipment: '自重/哑铃',
        difficulty: '中级',
        description: '单腿力量训练动作',
        steps: [
          '双脚与肩同宽站立',
          '向前迈出一步，屈膝下蹲',
          '前腿大腿与小腿约90度',
          '后腿膝盖接近地面',
          '通过前腿发力站起'
        ],
        tips: '上半身保持直立'
      },
      {
        id: 28,
        name: '保加利亚分腿蹲',
        equipment: '哑铃/凳子',
        difficulty: '高级',
        description: '高效的单腿训练',
        steps: [
          '后脚搭在凳子上',
          '前腿向前迈出一步',
          '屈膝下蹲至前腿大腿与地面平行',
          '通过前腿发力站起'
        ],
        tips: '保持躯干直立，核心收紧'
      },
      {
        id: 29,
        name: '腿举',
        equipment: '器械',
        difficulty: '初级',
        description: '安全高效的腿部训练',
        steps: [
          '背部和头部紧贴靠垫',
          '双脚踩在踏板上，与肩同宽',
          '通过腿部和臀部发力推起',
          '膝关节不完全锁死',
          '缓慢下放至膝关节90度左右'
        ],
        tips: '双脚间距可调整刺激不同肌群'
      },
      {
        id: 30,
        name: '哈克深蹲',
        equipment: '器械',
        difficulty: '中级',
        description: '背靠器械的深蹲训练',
        steps: [
          '背部和臀部紧贴靠垫',
          '双脚踩在踏板上，与肩同宽',
          '屈膝下蹲至大腿与小腿贴合',
          '通过腿部发力推起'
        ],
        tips: '对下背部压力较小'
      },
      {
        id: 31,
        name: '腿弯举',
        equipment: '器械',
        difficulty: '初级',
        description: '锻炼大腿后侧腘绳肌',
        steps: [
          '俯卧在腿弯举器械上',
          '脚踝勾住滚轴',
          '腘绳肌发力，将腿弯举',
          '至最高点时挤压',
          '缓慢下放，保持控制'
        ],
        tips: '避免使用过重借力'
      },
      {
        id: 32,
        name: '腿伸展',
        equipment: '器械',
        difficulty: '初级',
        description: '孤立锻炼股四头肌',
        steps: [
          '坐在腿伸展器械上',
          '调整垫子位置在小腿前侧',
          '股四头肌发力，伸直双腿',
          '顶峰收缩1秒',
          '缓慢下放，控制速度'
        ],
        tips: '适合作为腿部训练的热身动作'
      },
      {
        id: 33,
        name: '小腿提踵',
        equipment: '器械/杠铃',
        difficulty: '初级',
        description: '专门锻炼小腿肌群',
        steps: [
          '双脚站在垫子上，前脚掌着地',
          '脚后跟悬空',
          '小腿发力，将脚后跟抬起',
          '在顶峰挤压小腿',
          '缓慢下放至最低点'
        ],
        tips: '可坐姿或站姿，座姿难度较低'
      }
    ]
  },

  // 腹部
  {
    id: 'abs',
    name: '腹部',
    icon: '🎯',
    color: '#F7DC6F',
    description: '腹直肌、腹斜肌、腹横肌',
    exercises: [
      {
        id: 34,
        name: '标准卷腹',
        equipment: '自重',
        difficulty: '初级',
        description: '经典的腹肌训练动作',
        steps: [
          '仰卧在地上，膝盖弯曲',
          '双手放在耳侧或胸前',
          '腹肌发力，将上背部抬起',
          '在顶峰挤压腹肌',
          '缓慢下放，保持控制'
        ],
        tips: '不要用手拉扯头部'
      },
      {
        id: 35,
        name: '反向卷腹',
        equipment: '自重',
        difficulty: '初级',
        description: '锻炼下腹部',
        steps: [
          '仰卧在地上，双手放在身体两侧',
          '双腿抬起，大腿与地面垂直',
          '腹肌发力，将臀部抬起',
          '双腿随臀部一起向上卷',
          '缓慢下放'
        ],
        tips: '保持下背部贴地'
      },
      {
        id: 36,
        name: '卷腹摸脚跟',
        equipment: '自重',
        difficulty: '中级',
        description: '全面刺激腹直肌',
        steps: [
          '仰卧在地上，双腿伸直',
          '双手向头顶伸展',
          '腹肌发力，抬起上半身和双腿',
          '双手触碰脚跟',
          '缓慢下放'
        ],
        tips: '动作幅度大，刺激更全面'
      },
      {
        id: 37,
        name: '标准平板支撑',
        equipment: '自重',
        difficulty: '初级',
        description: '锻炼核心稳定的经典动作',
        steps: [
          '俯卧在垫子上',
          '前臂撑地，肘关节在肩正下方',
          '脚尖着地，身体从头到脚成一条直线',
          '收紧腹部，保持呼吸',
          '保持30-60秒'
        ],
        tips: '避免塌腰或撅屁股'
      },
      {
        id: 38,
        name: '侧平板支撑',
        equipment: '自重',
        difficulty: '初级',
        description: '专门锻炼腹斜肌',
        steps: [
          '侧卧在垫子上',
          '用一只前臂撑地，身体侧向抬起',
          '身体从头到脚成一条直线',
          '收紧腹部，保持呼吸',
          '保持30-60秒后换边'
        ],
        tips: '可抬腿上举增加难度'
      },
      {
        id: 39,
        name: '平板支撑抬腿',
        equipment: '自重',
        difficulty: '中级',
        description: '平板支撑的进阶动作',
        steps: [
          '保持标准平板支撑姿势',
          '收紧腹部，抬起一条腿',
          '保持1-2秒',
          '放下换另一条腿',
          '交替进行'
        ],
        tips: '保持身体稳定，不要左右晃动'
      },
      {
        id: 40,
        name: '悬垂举腿',
        equipment: '单杠',
        difficulty: '中级',
        description: '高效的下腹训练',
        steps: [
          '双手握住单杠，身体悬挂',
          '双腿并拢伸直',
          '腹肌发力，将双腿抬起至与地面平行',
          '在顶峰挤压腹肌',
          '缓慢下放'
        ],
        tips: '避免借助惯性，缓慢控制'
      },
      {
        id: 41,
        name: '仰卧举腿',
        equipment: '自重',
        difficulty: '初级',
        description: '躺着练下腹的经典动作',
        steps: [
          '仰卧在地上，双手放在身体两侧',
          '双腿并拢伸直',
          '腹肌发力，将双腿抬起至与地面垂直',
          '在顶峰挤压腹肌',
          '缓慢下放'
        ],
        tips: '下放时脚不要着地，保持腹肌紧张'
      },
      {
        id: 42,
        name: '登山者',
        equipment: '自重',
        difficulty: '中级',
        description: '有氧+核心训练组合',
        steps: [
          '俯卧在垫子上，用脚尖和手掌撑地',
          '收紧腹部，保持身体平直',
          '交替将膝盖向胸部收起',
          '快速交替进行',
          '保持呼吸节奏'
        ],
        tips: '可作为HIIT训练的一部分'
      }
    ]
  }
];
