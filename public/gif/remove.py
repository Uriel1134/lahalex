from PIL import Image

def remove_red_background(image_path, output_path, target_color=(139, 21, 56), tolerance=60):
    """
    Supprime une couleur spécifique (ici le rouge bordeaux) et la rend transparente.
    :param image_path: chemin de l'image d'entrée
    :param output_path: chemin de sortie
    :param target_color: couleur RGB à supprimer
    :param tolerance: marge d’erreur sur la couleur
    """
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        r, g, b, a = item

        # Si la couleur est proche du bordeaux -> transparence
        if abs(r - target_color[0]) < tolerance and abs(g - target_color[1]) < tolerance and abs(b - target_color[2]) < tolerance:
            new_data.append((r, g, b, 0))  # alpha 0 = transparent
        else:
            new_data.append((r, g, b, a))

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"✅ Image enregistrée : {output_path}")


# === Exemple d’utilisation ===
remove_red_background("bg-header.jpg", "bg-header-transparent.png")
remove_red_background("bg-header-1.png", "bg-header-1-transparent.png")
