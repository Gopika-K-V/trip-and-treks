import React from 'react';
import styles from './videoSection.module.scss';

const VideoSection = () => {
  return (
      <section className={styles.video_section} id="featuredVideo">
            <div className={`container`}>
                <h2 className={`title_main`}>Featured Video</h2>
                <div className={styles.video_container}>
                    <video width="100%" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                        <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg"/>
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>
        </section>

  )
}

export default VideoSection
