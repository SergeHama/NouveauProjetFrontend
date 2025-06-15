export interface Voyage {
  idVoyage?: number;
  libelleVoyage: string | null; // à modifer
  detailVoyage: string | null;
  dateVoyage: string | null;
}

export interface Client {
  idClient: string;
  nomClient: string;
  prenomClient: string;
  dateNaiss: string;
  mailClient: string;
  sexeClient: string;
  telClient: string;
  login: string;
  password: string;
}

export interface Reservation_1 {
  idReservation: number;
  dateReservation: string;
  client: Client;
  voyage: Voyage;
}

export interface TypeBillet {
  idTypeBillet: number;
  libelleTypeBillet: string;
  prixTypeBillet: number;
}
