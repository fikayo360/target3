import './contact.css'
export function Contact(){
    return (
        <section id="contact">
            <div id="contactCenter">
            <h2>Reach Out to us</h2>
            <h1>send us a message we will respond in minutes </h1>
            <form>
                <input type='text' placeholder="name"/>
                <textarea type='text' placeholder="message" />
                <button>submit</button>
            </form>
            </div>
           
        </section>
    )
}