import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export const TJNavigation = [
    {name: 'داشبورد', href: '/dashboard/main', icon: DashboardRoundedIcon, count: 0},
    {name: 'پیام‌', href: '/dashboard/messages', icon: EmailRoundedIcon, count: 1},
    {name: 'قبض', href: '/dashboard/bills', icon: CreditCardRoundedIcon, count: 0},
    {name: 'تنظیمات', href: '/dashboard/setting', icon: SettingsRoundedIcon, count: 0},
]

export const otherNavigation = [
    {name: 'داشبورد', href: '/dashboard/main', icon: DashboardRoundedIcon, count: 0},
    {name: 'پیام‌', href: '/dashboard/messages', icon: EmailRoundedIcon, count: 1},
    {name: 'کاربران', href: '/dashboard/users', icon: GroupRoundedIcon, count: 0},
    {name: 'قبض', href: '/dashboard/bills', icon: CreditCardRoundedIcon, count: 2},
    {name: 'تنظیمات', href: '/dashboard/setting', icon: SettingsRoundedIcon, count: 0},
]