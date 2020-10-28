export class DocsBaseRouter {
  public markers: any = [];

  onActivate(event: any): void {
    setTimeout(() => {
      this.markers = event.markers;
    }, 100);
  }
}
