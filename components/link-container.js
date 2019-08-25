const e = React.createElement;

export const LinkContainer = ({ link, imageUrl, linkText }) => {
    return (
        e('a', {
            className: 'flex-col jc-sb m-md bg-light w-400 h-200 shadow',
            href: link,
            target: '_blank',
            rel: 'noopener',
        }, [
            e('img', {
                key: `${link}-image`,
                src: imageUrl,
                alt: linkText,
                className: 'link-image',
            }, null),
            e('div', {
                key: `${link}-link`,
                className: 'flex-grow bg-dark border-top flex jc-c',
            }, e('span', { className: 'text-caps align-self-center' }, linkText))
        ])
    );
};
