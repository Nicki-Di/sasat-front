import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export const TJNavigation = [
    {name: 'داشبورد', href: '/dashboard', icon: DashboardRoundedIcon, current: true},
    {name: 'پیام‌', href: '/messages', icon: EmailRoundedIcon, current: false},
    {name: 'قبض', href: '/bills', icon: CreditCardRoundedIcon, current: false},
    {name: 'تنظیمات', href: '/setting', icon: SettingsRoundedIcon, current: false},
]

export const otherNavigation = [
    {name: 'داشبورد', href: '/dashboard', icon: DashboardRoundedIcon, current: true},
    {name: 'پیام‌', href: '/messages', icon: EmailRoundedIcon, current: false},
    {name: 'کاربران', href: '/users', icon: GroupRoundedIcon, current: false},
    {name: 'قبض', href: '/bills', icon: CreditCardRoundedIcon, current: false},
    {name: 'تنظیمات', href: '/setting', icon: SettingsRoundedIcon, current: false},
]