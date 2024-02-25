import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["modal_container"];

  open() {
    this.modal_containerTarget.classList.remove("hidden");
  }

  close() {
    this.modal_containerTarget.classList.add("hidden");
  }
}
