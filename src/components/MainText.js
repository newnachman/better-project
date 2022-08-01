import React from 'react'

const MainText = ( { totalMoneySaved, isOpenList, setIsOpenList } ) => {

  return (
    <div>
      <h3>
        בהמשך לשייחתנו, איתרנו לך חיסכון של 
        <span> { totalMoneySaved } </span>
         ש"ח בפנסיה!
      </h3>

      <p>
        לחץ(י) על הכפתור מטה כדי לאשר לנו את ביצוע הפעולה ולחתום על הטפסים הנדרשים.
      </p>

      <h3>
        פירוט על הפעולות אותן נבצע עבורך, תוכלי(י) למצוא
         <span style={{color:"blue", marginRight: '5px'}} onClick={ () => setIsOpenList( !isOpenList )}>
           כאן. 
           </span>
        <i>></i>
      </h3>
    </div>
  )
}

export default MainText;