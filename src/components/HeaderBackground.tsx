import { Box } from "@mui/system";



interface SVGBackgroundProps {
    svg: string;
    opacity?: number;
}

// A react component that takes in a shows an SVG that fills the width of the parent
const SVGBackground: React.FC<SVGBackgroundProps> = ({ svg, opacity }) => {
    return (
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundImage: `url(${svg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(10px)',
                opacity: opacity ?? 0.5
            }} />
        </Box>
    );
}

export default SVGBackground;