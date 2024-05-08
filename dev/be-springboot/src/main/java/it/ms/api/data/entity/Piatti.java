package it.ms.api.data.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "piatti")
public class Piatti {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "nome")
	private String nome;

	@Column(name = "categoria")
	private String categoria;

	@Column(name = "prezzo")
	private double prezzo;

    @Column(name = "descrizione")
	private String descrizione;

    @Column(name = "modifiche")
	private String modifiche;

    public Piatti() {
    }

    public Piatti(int id, String nome, String categoria, double prezzo, String descrizione, String modifiche) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.prezzo = prezzo;
        this.descrizione = descrizione;
        this.modifiche = modifiche;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getModifiche() {
        return modifiche;
    }

    public void setModifiche(String modifiche) {
        this.modifiche = modifiche;
    }



    
}
