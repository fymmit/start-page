import { LinkContainer } from './link-container.js';
import links from '../data/link-data.js';

const e = React.createElement;

export const LinkContainerList = () => {
    const linkContainers = links.map(link => {
        return e(LinkContainer, {
            key: link.link,
            link: link.link,
            linkText: link.linkText,
            imageUrl: link.imageUrl,
        }, null)
    });
    return (
        e('div', { className: 'flex flex-wrap jc-c' }, linkContainers)
    );
};
