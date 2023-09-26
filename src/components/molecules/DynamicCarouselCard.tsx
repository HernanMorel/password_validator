import { Carousel, Row, Col } from 'antd';
import { useDynamicCarousel } from '@/hooks/useDynamicCardCarousel';
import InputCard from '../atoms/InputCard';
import classes from '@/components/molecules/DynamicCarouselCard.module.css';
interface DynamicCarouselCardProps {
  data: {
    title: string;
    description: string;
    dynamicStyles: {
      cardStyle?: string;
      titleStyle?: string;
      inputStyle?: string;
      descriptionStyle?: string;
    };
    passwordReqs: (password: string) => boolean;
  }[];
  loading: boolean;
}
const DynamicCarouselCard: React.FC<DynamicCarouselCardProps> = ({
  data,
  loading,
}) => {
  const { activeCardIndex, handleCarouselAfterChange } = useDynamicCarousel();

  return !loading ? (
    <Row justify="center" align="middle">
      <Col>
        <Carousel
          effect="fade"
          className={classes.carousel}
          afterChange={handleCarouselAfterChange}
        >
          {data.map((item, index) => (
            <div key={index}>
              <InputCard
                title={item.title}
                description={item.description}
                dynamicStyles={item.dynamicStyles}
                passwordReqs={item.passwordReqs}
                activeCardIndex={activeCardIndex}
              />
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  ) : null;
};

export default DynamicCarouselCard;
