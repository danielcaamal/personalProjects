import bokeh
from bokeh.plotting import figure, output_file, show

def run():
    print(bokeh.__version__)
    output_file("graficado_simple.html")
    fig = figure()
    total_vals = int(input("Cuántos valores quieres graficar? "))
    x_vals = list(range(total_vals))
    y_vals = []

    for i in x_vals:
        val = int(input(f'Valor y para X_{i}: '))
        y_vals.append(val)
    
    fig.line(x_vals, y_vals)
    show(fig)

if __name__ == "__main__":
    run()