export type LinkArray = Array<{ href: string; label: string }>;

export const menuLinks: Record<string, LinkArray> = {
    'mainDrawerLinks': [
        { href: '/issue', label: 'Issues' },
        { href: '/project', label: 'Projects' },
        { href: '/ideas', label: 'Ideas' }
    ],
    'trailDrawerLinks': [
        { href: '/settings', label: 'Settings' }
    ]
};