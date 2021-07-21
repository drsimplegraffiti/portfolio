import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: '/img/gallery/gallery1.jpg',
    thumbnail: '/img/gallery/gallery1.jpg',
  },
  {
       original: '/img/gallery/gallery2.jpg',
    thumbnail: '/img/gallery/gallery2.jpg',

  },
  {
    original: '/img/gallery/gallery3.jpg',
    thumbnail: '/img/gallery/gallery3.jpg',
  },
  {
    original: '/img/gallery/gallery4.jpg',
    thumbnail: '/img/gallery/gallery4.jpg',
  },
  {
    original: '/img/gallery/gallery5.jpg',
    thumbnail: '/img/gallery/gallery5.jpg',
  },
  {
    original: '/img/gallery/gallery6.jpg',
    thumbnail: '/img/gallery/gallery6.jpg',
  },
  {
    original: '/img/gallery/gallery7.jpg',
    thumbnail: '/img/gallery/gallery7.jpg',
  },
  {
    original: '/img/gallery/gallery8.jpg',
    thumbnail: '/img/gallery/gallery8.jpg',
  },
  {
    original: '/img/gallery/gallery9.jpg',
    thumbnail:  '/img/gallery/gallery9.jpg',
  },
  {
    original: '/img/gallery/gallery10.jpg',
    thumbnail: '/img/gallery/gallery10.jpg',
  },
  {
    original: '/img/gallery/gallery11.jpg',
    thumbnail: '/img/gallery/gallery11.jpg',
  },
  {
    original: '/img/gallery/gallery9.jpg',
    thumbnail: '/img/gallery/gallery7.jpg',
  },
  {
    original: '/img/gallery/gallery9.jpg',
    thumbnail: '/img/gallery/gallery7.jpg',
  },
];
const Design = () => {
    return (
        <div className="swiper-container">
            <ImageGallery items={images} />
            </div>
    );
}
 
export default Design;