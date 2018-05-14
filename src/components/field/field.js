import Emitter from '../../modules/eventEmitter.js'


export default class Field extends Emitter {
    constructor(el) {
        super()

        this.elem = document.createElement('form');
        this.elem.className = 'app_field';
        el.appendChild(this.elem);
        
        this.elem.addEventListener(
            'submit',
            this.submit.bind(this)
        )

    }

    render() {
        // this.elem.insertAdjacentHTML('beforeend', this.template());
        this.elem.innerHTML = this.template();
    }

    template() {
        return `
        <input name="inp" type="text" class="app_field_inp" placeholder="type your message">
        <input type="submit" class="app_field_submit" value="Отправить">     
       `
    }

    submit(evnt) {
        event.preventDefault();
        const form = event.target;
        const message = event.target.inp.value;
        
        let new_event = new Event(
            'newMessage',
            {bubbles: true}
        )
        new_event.date = message;

        this.dispatchEvent(new_event);

        form.reset();
    }

    
}
