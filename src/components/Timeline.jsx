import Time from './Time'
import { timeline } from "../data";

const Timeline = () => {
    return (
      <section class="section timeline">
        <div class="section-title">
          <h2>timeline</h2>
          <div class="underline"></div>
        </div>
        <div class="section-center timeline-center">
          {timeline.map((time) => {
            return <Time {...time} key={time.id} />;
          })}
          <article class="timeline-item">
            <h4>2019</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number"> 2 </span>
          </article>
          <article class="timeline-item">
            <h4>2018</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number"> 3 </span>
          </article>
          <article class="timeline-item">
            <h4>2017</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number"> 4 </span>
          </article>
          <article class="timeline-item">
            <h4>2016</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number"> 5 </span>
          </article>
          <article class="timeline-item">
            <h4>2015</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur voluptates tempore numquam? Quidem incidunt fugit
              quasi autem, ea excepturi.
            </p>
            <span class="number"> 6 </span>
          </article>
        </div>
      </section>
    );
}

export default Timeline
