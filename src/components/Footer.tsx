import { WHATSAPP_URL, EMAIL_URL, BRAND_NAME, BRAND_TAGLINE } from "@/data/constants";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-green-dark py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-extrabold text-primary-foreground">{BRAND_NAME}</h3>
            <p className="text-sm text-primary-foreground/60 mt-1">{BRAND_TAGLINE}</p>
            <p className="text-sm text-primary-foreground/50 mt-3 max-w-xs">
              Camilan premium berbahan ketan dengan keju lumer, cocok untuk dinikmati dan dijadikan peluang usaha.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-primary-foreground text-sm mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  WhatsApp: 0812-8725-0795
                </a>
              </li>
              <li>
                <a href={EMAIL_URL} className="hover:text-secondary transition-colors">
                  boluketanjatiwangi@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-primary-foreground text-sm mb-3">Ikuti Kami</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-secondary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} {BRAND_NAME} {BRAND_TAGLINE}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
