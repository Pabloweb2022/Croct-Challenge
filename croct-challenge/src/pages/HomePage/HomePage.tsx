import { ReactElement, Suspense } from 'react';
import { Personalization, Slot } from '@croct/plug-react';
import { MainContainer, BodyContainer } from './style'
import HeaderButtons from '../../Components/HeaderButtons'
import Developer from '../../images/developer.png'
import Marketer from '../../images/marketer.png'

type HomeBannerContent = {
    title: string,
    subtitle: string,
    cta: {
        label: string,
        link: string,
    },
};

const fallbackBanner: HomeBannerContent = {
    title: 'Choose your ocupation area',
    subtitle: 'Double click above or try below',
    cta: {
        label: 'Try now',
        link: 'https://croct.com',
    }
};

export default function HomePage(): ReactElement {

    return (
        <BodyContainer>
            <HeaderButtons />
            <MainContainer>
                <Suspense fallback="Personalizing content...">
                    <Slot id="home-banner" fallback={fallbackBanner}>
                        {({ title, subtitle, cta }: HomeBannerContent) => (
                            <div className='containerContent'>
                                <strong className='title'>{title}</strong>
                                <p className='subtitle'>{subtitle}</p>
                                <a href={cta.link}><button className='buttonHome'>{cta.label}</button></a>
                            </div>
                        )}
                    </Slot>
                </Suspense>
                <Suspense fallback="Personalizing content...">
                    <Personalization expression="user's persona is 'developer'">
                        {
                            (isDeveloper: boolean) => isDeveloper
                                ? <img className='image' alt="Developer Image" src={Developer} />
                                : <img className='image' alt="Marketer Image" src={Marketer} />
                        }
                    </Personalization>
                </Suspense>
            </MainContainer>
        </BodyContainer>
    )
}