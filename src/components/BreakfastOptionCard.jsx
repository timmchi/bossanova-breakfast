import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BreakfastOptionCard = ({ place, openCard, handleClose }) => {

    // src={place?.photos[0].getUrl()}

    return openCard === place.place_id ? (
        <div className='breakfast-place-container'>
            <Card
        variant="outlined"
        orientation="vertical"
        sx={{
            // width: '110%',
            width: '350px',
            '&:hover': { boxShadow: '2px 2px 5px 2px rgba(172,215,147,0.75)', backgroundColor: 'rgb(255, 166, 47, 1)'},
            backgroundColor: 'rgb(255, 166, 47, 0.7)',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: '#FFE8C8',
            height: 512,
            position: 'relative'
        }}
        >
            <AspectRatio ratio="1" sx={{ width: 300, margin: 'auto', paddingTop: 3 }}>
                <img
                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=300"
                srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=300&dpr=2 2x"
                loading="lazy"
                alt={`${place?.name} picture`}
                />
            </AspectRatio>
            <CardContent sx={{ paddingLeft: 3 }}>
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', top: 5, right: 5}}>
                    <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
            <Stack direction="row" alignItems="center" gap={0.5}>
                <Typography level="title-lg" id="card-description" sx={{ color: 'white', fontSize: '2.3rem'}}>
                    {place?.name}
                </Typography>
            </Stack>
            {place?.types[0] === 'cafe' ? <LocalCafeIcon sx={{ color: 'white'}} /> : <RestaurantIcon sx={{ color: 'white'}} />}
            <>
                    <Rating name="read-only-place-rating" value={place?.rating} precision={0.1} readOnly sx={{ '& .MuiRating-iconFilled': {
                        color: '#FFE8C8',
                    } }} />
            </>
            <Typography level="body-lg" aria-describedby="card-description" mb={1} sx={{ color: '#FFE8C8'}}>
                <b>{place?.vicinity}</b>
            </Typography>
            </CardContent>
        </Card>
        </div>
    ) : null
}

export default BreakfastOptionCard