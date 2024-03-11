import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["habitEntryForm"];

  toggle() {
    this.habitEntryFormTarget.toggleAttribute("hidden");
  }
}
