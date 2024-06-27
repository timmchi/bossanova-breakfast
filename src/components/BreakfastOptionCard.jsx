import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const BreakfastOptionCard = ({ place }) => {

    // src={place?.photos[0].getUrl()}

    return (
        <div className='breakfast-place-container'>
            <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
            width: 320,
            '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            backgroundColor: 'rgb(255, 166, 47, 0.7)',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: '#FFE8C8',
            boxShadow: '2px 2px 5px 2px rgba(172,215,147,0.75)',
            margin: 2,
        }}
        >
            <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                loading="lazy"
                alt={`${place?.name} picture`}
                />
            </AspectRatio>
            <CardContent>
            <Typography level="title-lg" id="card-description" sx={{ color: 'white'}}>
                {place?.name}
            </Typography>
            <Typography level="body-m" aria-describedby="card-description" mb={1} sx={{ color: 'yellow'}}>
                {place?.rating}
            </Typography>
            <Typography level="body-sm" aria-describedby="card-description" mb={1} sx={{ color: '#A47D54'}}>
                {place?.vicinity}
            </Typography>
            <Typography level="body-sm" aria-describedby="card-description" mb={1} sx={{ color: '#A47D54'}}>
                {place?.types[0]}
            </Typography>
            </CardContent>
        </Card>
        </div>
    )
}

export default BreakfastOptionCard