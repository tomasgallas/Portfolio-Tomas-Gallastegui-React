// src/components/Projects.jsx
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Projects({ t }) {
  return (
    <section id="proyectos">
      <h2 className="fade-in-up">{t.title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {t.items.map((proyecto) => (
          <SwiperSlide key={proyecto.title}>
            <ProjectCard
              title={proyecto.title}
              description={proyecto.description}
              imgSrc={proyecto.imgSrc}
              tags={proyecto.tags}
              demoUrl={proyecto.demoUrl}
              repoUrl={proyecto.repoUrl}
              liveText={t.liveDemo}
              codeText={t.viewCode}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default Projects;