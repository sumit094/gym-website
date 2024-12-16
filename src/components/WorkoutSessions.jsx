import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
       <h1>TOP WORKOUT SESSION</h1>
       <p>Each rep, each breath, each drop of sweat is a step toward your stronger self. Remember why you started, focus on your goals, and push harder. This is your time, your challenge, your victory. </p>
       <img src="/img5.jpg" alt="workout"></img>
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>Elevate your fitness journey with our exclusive bootcamp sessions tailored for all fitness levels. Experience high-energy workouts, expert coaching, and a supportive community that motivates you to reach new heights.</p>
        <div className="bootcamps">
          <div>
            <h4>Comprehensive Full-Body Workouts</h4>
            <p>A combination of cardio, strength training, and core exercises in every session to ensure balanced fitness progress.Includes exercises like burpees, push-ups, squats, lunges, and kettlebell swings to challenge all muscle groups.</p>
          </div>
          <div>
            <h4>Tailored to Your Fitness Goals</h4>
            <p>Whether your goal is weight loss, muscle building, improved endurance, or overall fitness, every workout is designed to help you succeed.Trainers evaluate your fitness level during the first session and adapt the intensity accordingly.</p>
          </div>
          <div>
            <h4>Experienced and Certified Coaches</h4>
            <p>Led by trainers certified in functional fitness, HIIT, strength conditioning, and more.Trainers also provide guidance on proper form, injury prevention, and optimal recovery techniques.</p>
          </div>
          <div>
            <h4>High-Intensity Interval Training</h4>
            <p>Sessions include bursts of high-intensity exercises followed by brief rest periods.HIIT is proven to burn calories, improve cardiovascular health, and boost metabolism.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions
