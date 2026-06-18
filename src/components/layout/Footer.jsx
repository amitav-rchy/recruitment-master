import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  LinkedInIcon,
  YouTubeIcon,
} from '../ui/SocialIcons.jsx'

const SOCIAL_LINKS = [
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: XIcon, label: 'X (Twitter)', href: '#' },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { Icon: YouTubeIcon, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(150deg, #081840 0%, #0F2A5E 60%, #14336B 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" aria-label="RemoteRecruit home">
          <img
            src="/Logo.png"
            alt="RemoteRecruit"
            loading="lazy"
            width="140"
            height="32"
            className="h-8 w-auto"
          />
        </a>

        <nav aria-label="Social media links">
          <ul className="flex items-center gap-5">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-blue-300/80 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
