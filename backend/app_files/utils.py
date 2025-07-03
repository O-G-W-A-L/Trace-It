def calculate_similarity(str1, str2):
    # Implement Levenshtein distance algorithm
    if not str1 or not str2:
        return 0.0

    len_str1 = len(str1)
    len_str2 = len(str2)
    matrix = [[0] * (len_str1 + 1) for _ in range(len_str2 + 1)]

    for i in range(len_str1 + 1):
        matrix[0][i] = i
    for j in range(len_str2 + 1):
        matrix[j][0] = j

    for j in range(1, len_str2 + 1):
        for i in range(1, len_str1 + 1):
            cost = 0 if str2[j - 1] == str1[i - 1] else 1
            matrix[j][i] = min(
                matrix[j - 1][i] + 1,
                matrix[j][i - 1] + 1,
                matrix[j - 1][i - 1] + cost
            )

    return 1 - (matrix[len_str2][len_str1] / max(len_str1, len_str2))

def get_similarity_score(str1, str2):
    """ 
    calculate smilarity score between two strings
    """
    if not str1 or not str2:
        return 0.0
    return calculate_similarity(str1, str2)
