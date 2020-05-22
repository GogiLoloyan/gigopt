import menu1 from './menu1.png'
import menu2 from './menu2.png'
import menu3 from './menu3.png'
import menu4 from './menu4.png'
import menu5 from './menu5.png'
import menu6 from './menu6.png'

export const menuData = [
	{
		icon: menu1,
		text: 'Кондиционирование',
		subMenu: [
			{
				text: 'a',
				subMenu: [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' }]
			},
			{
				text: 'b',
				subMenu: [{ text: 'a' }, { text: 'b' }]
			},
			{
				text: 'c',
				subMenu: [{ text: 'a' }, { text: 'b' }]
			},
			{
				text: 'd',
				subMenu: []
			},
			{
				text: 'e',
				subMenu: [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' }]
			},
			{
				text: 'f',
				subMenu: [{ text: 'a' }]
			}
		]
	},
	{
		icon: menu2,
		text: 'Вентиляция',
		subMenu: [
			{
				text: 'a',
				subMenu: [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' }]
			},
			{
				text: 'b',
				subMenu: [{ text: 'a' }, { text: 'b' }]
			},
			{
				text: 'c',
				subMenu: [{ text: 'a' }, { text: 'b' }]
			}
		]
	},
	{
		icon: menu3,
		text: 'Холодильное оборудование',
		subMenu: [
			{
				text: 'a',
				subMenu: [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' }]
			},
			{
				text: 'b',
				subMenu: [{ text: 'a' }, { text: 'b' }]
			}
		]
	},
	{
		icon: menu4,
		text: 'Обогреватели и камины',
		subMenu: [
			{
				text: 'a',
				subMenu: [{ text: 'a' }, { text: 'b' }, { text: 'c' }]
			},
			{
				text: 'b',
				subMenu: [{ text: 'a' }, { text: 'b' }]
			}
		]
	},
	{
		icon: menu5,
		text: 'Отопление и водоснабжение',
		subMenu: [
			{
				text: 'a',
				subMenu: [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' }]
			},
			{
				text: 'b',
				subMenu: [{ text: 'a' }, { text: 'b' }]
			}
		]
	},
	{
		icon: menu6,
		text: 'Расходные материалы и Инструменты',
		subMenu: [
			{
				text: 'a',
				subMenu: [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' }]
			},
			{
				text: 'b',
				subMenu: [{ text: 'a' }, { text: 'b' }]
			},
			{
				text: 'c',
				subMenu: []
			},
			{
				text: 'd',
				subMenu: [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' }]
			},
			{
				text: 'e',
				subMenu: []
			},
			{
				text: 'f',
				subMenu: [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' }]
			}
		]
	}
]
