import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: '/img/gallery/gallery1-min.jpg',
    thumbnail: '/img/gallery/gallery1-min.jpg',
  },
   {
    original: '/img/gallery4-min.jpg',
    thumbnail: '/img/gallery4-min.jpg',
  },
  {
       original: '/img/gallery/gallery3-min.jpg',
    thumbnail: '/img/gallery/gallery3-min.jpg',

  },
  {
    original: '/img/gallery/gallery5-min.jpg',
    thumbnail: '/img/gallery/gallery5-min.jpg',
  },
  {
    original: '/img/gallery/gallery6-min.jpg',
    thumbnail: '/img/gallery/gallery6-min.jpg',
  },
  {
    original: '/img/gallery/gallery7-min.jpg',
    thumbnail: '/img/gallery/gallery7-min.jpg',
  },
 
  
];

const Work = () => {
    return (
            <section className="work section" id="work">
                <h2 className="section-title">Graphics</h2>

                 <div className="swiper-container">
            <ImageGallery items={images} />
            </div>
            </section>
     );
}
 
export default Work;