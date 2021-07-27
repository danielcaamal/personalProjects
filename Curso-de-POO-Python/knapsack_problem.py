def knapsack(size, weights, values, n):
    print(10*"--")
    print(f"Size: {size}, N: {n}")
    if n == 0 or size == 0:
        value = 0
        print(f"Value selected: {value}")
        return value
    
    if weights[n-1] > size:
        value = knapsack(size, weights, values, n-1)
        print(f"Value selected: {value}")
        return value
    
    value = max(values[n-1] + knapsack(size - weights[n-1], weights, values, n-1),
                knapsack(size, weights, values, n-1))
    print(f"Value selected: {value}")
    return value


def run():
    values = [60, 100, 120]
    weights = [10, 20, 30]
    size = 30
    n = len(values)

    result = knapsack(size, weights, values, n)
    print(result)


if __name__ == "__main__":
    run()