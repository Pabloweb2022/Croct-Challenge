import {ReactElement, Suspense} from 'react';
import {Slot} from '@croct/plug-react';


type HomeBannerContent = {
  title: string,
  subtitle: string,
  cta: {
      label: string,
      link: string,
  },
};

const fallbackBanner: HomeBannerContent = {
    title: 'Default title',
    subtitle: 'Default subtitle',
    cta: {
        label: 'Try now',
        link: 'https://croct.com',
    }
};

export default function HomePage(): ReactElement {
    return (
        <Suspense fallback="Personalizing content...">
            <Slot id="home-banner" fallback={fallbackBanner}>
                {({title, subtitle, cta}: HomeBannerContent) => (
                    <div>
                        <strong>{title}</strong>
                        <p>{subtitle}</p>
                        <a href={cta.link}>{cta.label}</a>
                    </div>
                )}
            </Slot>
        </Suspense>
    )
}