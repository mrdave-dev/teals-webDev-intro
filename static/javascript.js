// alert("Hey there :)");

const students = [
  'a',
  'b',
  'c',
  'd'
]

students.forEach(function(student) {
  const table = document.querySelector("#student-table")
    .querySelector('tbody')
  
  const studentNameCell = document.createElement('td')
  studentNameCell.innerText = student

  const streakCell = document.createElement('td')
  streakCell.className = 'student-streak'
  streakCell.innerText = '0'

  const addButton = document.createElement('button')
  addButton.className = 'btn btn-primary'
  addButton.innerText = 'Add'
  addButton.addEventListener('click', function() {
    addToStudent(student)
  })

  const resetButton = document.createElement('button')
  resetButton.className = 'btn btn-danger'
  resetButton.innerText = 'Reset'
  resetButton.addEventListener('click', function() {
    resetStudent(student)
  })

  const actionCell = document.createElement('td')
  actionCell.appendChild(addButton)
  actionCell.appendChild(resetButton)
  
  
  const studentRow = document.createElement('tr')
  studentRow.setAttribute('name', student)
  studentRow.appendChild(studentNameCell)
  studentRow.appendChild(streakCell)
  studentRow.appendChild(actionCell)

  table.appendChild(studentRow)
})

function addToStudent(studentName) {
  const studentRow = document.querySelector('[name=' + studentName + ']')
  const studentStreakCell = studentRow.querySelector('.student-streak')
  const studentStreakNum = Number.parseInt(studentStreakCell.innerText)
  studentStreakCell.innerText = (studentStreakNum + 1).toString()
}

function resetStudent(studentName) {
  const studentRow = document.querySelector('[name=' + studentName + ']')
  const studentStreakCell = studentRow.querySelector('.student-streak')
  studentStreakCell.innerText = (0).toString()
}