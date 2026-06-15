"use client";

import { useLanguage } from "../context/LanguageContext";
import { getHeadingAnimation } from "../lib/headingAnimation";

const benefitIcons = [
// Sell Services
<svg
key="services"
width="40"
height="40"
viewBox="0 0 24 24"
fill="none"
stroke="#ff7a00"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"

>

```
<path d="M3 7h18" />
```

```
<path d="M5 7v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
<path d="M9 12h6" />
<path d="M10 3h4" />
```

</svg>,

// Google Visibility / Discoverability
<svg
key="visibility"
width="40"
height="40"
viewBox="0 0 24 24"
fill="none"
stroke="#ff7a00"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"

>

```
<circle cx="11" cy="11" r="7" />
```

```
<path d="m21 21-4.3-4.3" />
```

</svg>,

// AI Tools
<svg
key="ai-tools"
width="40"
height="40"
viewBox="0 0 24 24"
fill="none"
stroke="#ff7a00"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"

>

```
<rect x="7" y="7" width="10" height="10" rx="2" />
```

```
<path d="M12 2v3" />
<path d="M12 19v3" />
<path d="M2 12h3" />
<path d="M19 12h3" />
```

</svg>,

// Control & Branding
<svg
key="control"
width="40"
height="40"
viewBox="0 0 24 24"
fill="none"
stroke="#ff7a00"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"

>

```
<path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
```

```
<path d="M9 12l2 2 4-4" />
```

</svg>,
];


export default function BenefitsSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.benefits.eyebrow}</span>
          <h2 {...getHeadingAnimation(0, 27)}>{t.benefits.title}</h2>
        </div>
        <div className="card-grid four-up">
          {t.benefits.items.map((benefit, index) => (
            <article key={benefit} className="info-card benefit-card feature-item">
              <span className="benefit-mark" aria-hidden="true">
                {benefitIcons[index]}
              </span>
              <h3 {...getHeadingAnimation(index, 28)}>{benefit}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
