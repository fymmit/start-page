const e = React.createElement;

export const WeatherFrame = ({ city }) => {
    return (
        e('div', {
            style: {
                position: 'relative',
                overflow: 'hidden',
                width: '320px',
                height: '320px',
            },
            className: 'align-self-center m-md shadow'
        },
            e('iframe', {
                key: 'weather',
                scrolling: 'no',
                src: `https://www.supersaa.fi/suomi/${city}/`,
                className: 'no-border',
                style: {
                    position: 'absolute',
                    top: '-155px',
                    left: '0',
                    width: '600px',
                    height: '600px',
                },
            }, null)
        )
    );
};
