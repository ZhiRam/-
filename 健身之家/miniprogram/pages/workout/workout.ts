// 健身动作数据 - 五大肌群
const muscleGroups = [
  { id: 'chest', name: '胸部', icon: '💪', color: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A5A 100%)', exerciseCount: 8 },
  { id: 'shoulder', name: '肩部', icon: '🎯', color: 'linear-gradient(135deg, #4ECDC4 0%, #3DBDB5 100%)', exerciseCount: 8 },
  { id: 'back', name: '背部', icon: '🔙', color: 'linear-gradient(135deg, #45B7D1 0%, #3498B8 100%)', exerciseCount: 8 },
  { id: 'leg', name: '腿部', icon: '🦵', color: 'linear-gradient(135deg, #DDA0DD 0%, #C48BC4 100%)', exerciseCount: 9 },
  { id: 'abs', name: '腹部', icon: '🎯', color: 'linear-gradient(135deg, #F7DC6F 0%, #F4D03F 100%)', exerciseCount: 9 }
];

Page({
  data: {
    muscleGroups: muscleGroups
  },

  // 返回上一页
  goBack() {
    wx.navigateBack();
  },

  // 选择肌群，跳转到详情页
  selectMuscle(e: any) {
    const muscleId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/workout/detail/detail?muscle=${muscleId}`
    });
  }
});
