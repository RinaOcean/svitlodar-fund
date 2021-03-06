import React from 'react'
import styles from "./Why.module.css";
import Container from "../Container";

const Why = () => {
  return (
    <Container>
      <section className={styles.main}>
        <div>
          <h1 className={styles.mainHeader}>why</h1>
        </div>
        <div>
          <p className={styles.description}>
            Діяльність Фонду дає можливість суттєво підвищити якість надання
            допомоги, а також розробляти та впроваджувати нові методики
            ефективного відновлення психічного та фізичного здоров'я у
            найкоротші терміни стосовно великої кількості громадян, що
            реабілітуються. Кошти, що збираються Фондом, витрачаються
            безпосередньо на виконання статутних завдань та відповідно до тієї
            чи іншої програми, на яку вони внесені благодійниками. Вся фінансова
            діяльність є абсолютно прозорою та зрозумілою для Донорів, які
            здійснюють грошову та іншу допомогу Фонду.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Why;