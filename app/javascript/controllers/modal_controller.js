import { Controller } from "@hotwired/stimulus";

// TODO: Figure this out later
export default class extends Controller {
  getModalContainerElement() {
    return document.getElementById("modal_container");
  }

  open() {}

  close() {}
}
