export class IContact {
  contact_name: string;
  contact_number: number;
  contact_email: string;
  subject: string;
  message: string;
  service_type: string;
  service_location: string;
  constructor(data: any) {
    this.contact_name = data.name || '';
    this.contact_number = data.mobile ? data.mobile.toString() : '';
    this.contact_email = data.email || '';
    this.subject = data.subject || '';
    this.message = data.message || '';
    this.service_type = data.serviceList || '';
    this.service_location = data.serviceLocation || '';
  }
}
