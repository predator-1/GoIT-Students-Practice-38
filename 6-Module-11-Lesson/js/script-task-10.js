/**
 * Напиши класс Notes который управляет коллекцией заметок в свойстве items.
 * Заметка это объект со свойствами text и priority.
 * Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
 * Добавь методы addNote(note), removeNote(text) и updateNotePriority(text, newPriority).
 */

const PRIORITY = {
  LOW: 1,
  NORMAL: 2,
  HIGH: 3,
};

class Note {
  constructor(text, priority) {
    this.text = text;
    this.priority = priority;
  }
}

class Notes {
  #notes = [];

  #findIndex(text) {
    let index = -1;
    for (let i = 0; i < this.#notes.length; i++) {
      if (this.#notes[i].text === text) {
        index = i;
        break;
      }
    }
    return index;
  }

  addNote(...notes) {
    this.#notes = this.#notes.concat(notes);
  }

  removeNote(text) {
    let index = this.#findIndex(text);

    if (index > -1) {
      this.#notes.splice(index, 1);
    }
  }

  updateNotePriority(text, newPriority) {
    let index = this.#findIndex(text);

    if (index > -1) {
      this.#notes[index].priority = newPriority;
    }
  }

  // return sorted notes
  // high first
  get notes() {
    return this.#notes;
  }
}

const note1 = new Note('first', PRIORITY.NORMAL);
const note2 = new Note('second', PRIORITY.HIGH);
const note3 = new Note('third', PRIORITY.LOW);

const notes = new Notes();
notes.addNote(note1, note2, note3);
//notes.removeNote('second');
notes.updateNotePriority('second', PRIORITY.LOW);

console.log(notes.notes);
