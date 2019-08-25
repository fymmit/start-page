import { LinkContainerList } from './link-container-list.js';
import { WeatherFrame } from './weather-frame.js';
const e = React.createElement;

export const Root = () => {
    return (
        e('div', { className: 'flex-col jc-sb min-h-100p' }, [
            e(LinkContainerList, { key: 'link-list' }, null),
            // e(WeatherFrame, {
            //     key: 'weather',
            //     city: 'turku',
            // }, null)
        ])
    );
};
