import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["houdini"];

  toggle() {
    this.houdiniTarget.toggleAttribute("hidden");
  }
}
