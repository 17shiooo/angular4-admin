export const HeaderMenus = {
    leftMenus: [
        "小米网", "MIUI", "米聊", "多看阅读", "云服务", "小米移动版"
    ],
    rightMenus: [
        "登录/注册", "购物车", "关注", "快速导航"
    ]
}
export const NavList = [
    { path: 'home', name: '首页' },
    { path: 'list', name: '榜单' },
    { path: 'book_review', name: '书评' },
    { path: 'fine_free', name: '精品·免费' },
    { path: 'classify', name: '分类' },
    { path: 'client', name: '客户端' },
    { path: 'forum', name: '论坛' },
];

export class NavEntity {
    path: string;
    name: string;
}