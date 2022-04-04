import styles from "./How.module.css";
import Container from "../Container";

const How = () => {
  return (
    <Container>
      <section className={styles.main}>
        <div>
          <h1 className={styles.mainHeader}>how</h1>
        </div>
        <div>
          <p className={styles.descriptionMain}>
            Для виконання цього завдання Фонд проводить заходи та збір
            пожертвувань в Україні та за кордоном за трьома програмами:
          </p>
          <div className={styles.gridContainer}>
            <div className={styles.gridFirstCards}>
              <div className={styles.contentBlue}>Programm 1</div>
              <p className={styles.description}>
                благодійної допомоги дітям, які перебувають у зоні ведення
                військових дій та на прилеглих до неї територіях. У зоні
                проведення АТО, на території Луганської та Донецької областей,
                опинилися тисячі дітей. Через те, що Луганськ та Донецьк на
                сьогоднішній день перебувають не під контролем України, діти
                виявилися позбавленими більшості соціальних благ, у тому числі
                спеціалізованої медичної допомоги, ліків та засобів гігієни.
                Фонд надає допомогу декільком школам, інтернатам та
                спеціалізованим медичним закладам для дітей у зоні проведення
                АТО, а також конкретним дітям щодо отримання на благодійних
                засадах допомоги у медичних закладах міста Харкова.
              </p>
            </div>
            <div className={styles.gridFirstCards}>
              <div className={styles.contentBlue}>Programm 2</div>
              <p className={styles.description}>
                благодійної допомоги цивільним особам, які постраждали під час
                бойових дій, сім'ям загиблих та зниклих безвісти солдатів.
                Ситуація з цивільними особами, які проживали на території
                проведення бойових дій, вимушеними переселенцями, сім'ями, що
                втратили внаслідок військових дій близьких та родичів, близька
                до критичної. Держава практично нічого не робить для
                психосоматичної реабілітації таких потерпілих. Вся робота з
                реабілітації цих категорій громадян зазвичай лежить на
                волонтерських організаціях.
              </p>
            </div>
            <div className={styles.gridThirdCard}>
              <div className={styles.contentYellow}>Programm 3</div>
              <p className={styles.descriptionYellow}>
                благодійної допомоги ветеранам АТО та членам їхніх сімей.
                Проблеми, що виникають у цієї категорії людей, можуть мати
                найтяжчі наслідки як для них самих, так і для їхнього оточення.
                Державні інститути також практично нічого не пропонують у цьому
                напрямі. Ті мізерні дії, які пропонують державні структури,
                практично ніяк не відчуваються і не в змозі охопити великі маси,
                які потребують такої реабілітації. Більшість ветеранів АТО має
                не лише психологічні, а й соматичні проблеми, які нерозривно
                пов'язані між собою. Це особливо стосується воїнів, які отримали
                контузії і серйозні поранення, що спричинили втрату кінцівок або
                спинальні травми. Для реабілітації цих бійців необхідна допомога
                як психологів, а й цілої команди інших фахівців: психіатрів,
                психотерапевтів, невропатологів, наркологів, терапевтів. БО «БФ
                «Світлодар», у взаємодії з «Центром психосоматичної
                реабілітації» ТОВ «Інститут прикладної кріології», ДП «Інститут
                протезування», БО «БФ «Сестра милосердя», ГО «Крила 8 сотні»,
                іншими організаціями та громадянами приймає активне участь у
                успішному здійсненні заходів щодо психосоматичної реабілітації
                із застосуванням новітніх авторських методик у цій галузі.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default How;