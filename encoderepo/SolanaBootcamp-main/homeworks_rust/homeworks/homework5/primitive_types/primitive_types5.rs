fn main() {
    let cat = ("Furry McFurson", 3.5);
    let (name, age): (&str,f32) = cat;

    println!("{} is {} years old.", name, age);
}
